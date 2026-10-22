import { useEffect } from "react";
import {useLocation} from "react-router-dom"

const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-widget-script";
const SUPPORTED_LANGUAGES = ["hi", "mr", "en"];

function clearGoogleTranslateCookie() {
    const host = window.location.hostname;

    const domains = [
        "",
        `; domain=${host}`,
        `; domain=.${host}`,
    ];

    domains.forEach((domain) => {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + domain
    })
}

function getSavedGoogleLanguage() {
    const cookie = document.cookie.split("; ").find((item) => item.startsWith("googtrans="))

    if (!cookie) return null;

    try {
        const value = decodeURIComponent(cookie.split("=").slice(1).join("="))
        const parts = value.split("/");
        const language = parts[parts.length - 1]

        return SUPPORTED_LANGUAGES.includes(language) ? language : null;
    } catch {
        return null;
    }
}

function applyGoogleLanguage(language, attempts = 0) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    if (language === "en") {
        clearGoogleTranslateCookie();
        window.location.reload();
        return;
    }

    const select = document.querySelector("#google_translate_element select");

    if (!select) {
        if (attempts < 30) {
            window.setTimeout(() => applyGoogleLanguage(language, attempts + 1), 100);

        }
        return;
    }

    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }))
}

function initializeGoogleTranslate() {
    const container = document.getElementById("google_translate_element");

    const TranslateElement = window.google?.translate?.TranslateElement;

    if (!container || !TranslateElement || container.dataset.initialized === "true") {
        return
    }

    new TranslateElement({
        pageLanguage: "en",
        includedLanguages: "hi,mr,en",
        autoDisplay: false,
    },
        "google_translate_element"
    );

    container.dataset.initialized = "true";

}

export default function GoogleTranslate(){
    const {pathname} =  useLocation();

    useEffect(()=>{
        window.googleTranslateElementInit = initializeGoogleTranslate;

        if(window.google?.translate?.TranslateElement){
            initializeGoogleTranslate();
        }else if(
            !document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)
        ){
            const script = document.createElement("script")

            script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
            script.src = "https://translate.google.com/translate_a/element.js"+"?cb=googleTranslateElementInit";
            script.async = true;

            document.body.appendChild(script)
        }

        const handleLanguageChange = (event) => {
            const language = event.detail;

            if(SUPPORTED_LANGUAGES.includes(language)){
                applyGoogleLanguage(language)
            }
        };

        window.addEventListener("site-language-change",handleLanguageChange);

        return () => {
            window.removeEventListener("site-language-change",handleLanguageChange)
        }
    },[])

    useEffect(()=>{
        const language = getSavedGoogleLanguage()

        if(!language || language === "en") return undefined;

        const timeoutId = window.setTimeout(()=>{
            applyGoogleLanguage(language)
        },300);

        return () => window.clearTimeout(timeoutId)
    },[pathname])

    return (
        <div
            id="google_translate_element"
            area-hidden = "true"
            style={{display : "none"}}
        />
    )
}