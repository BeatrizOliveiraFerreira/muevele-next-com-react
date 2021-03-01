import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(challengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/66791075?s=460&u=575ad680195c5e9124fd466242dbafe156625fc9&v=4" alt="Beatriz Oliveira Ferreira" />
            <div>
                <strong>Beatriz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
                
            </div>
            
        </div>
        
    );
}