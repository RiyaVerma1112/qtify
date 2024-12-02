import React from "react";
import styles from "./HeroSection.module.css" ;
import heroImage from "../../assets/hero.png"

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSectionText}>
                <h3>100 Thousand Songs, ad-free</h3>
                <h3>Over thousands podcast episodes</h3>
            </div>
            <img src={heroImage}></img>
        </div>
    )
}

export default HeroSection ;