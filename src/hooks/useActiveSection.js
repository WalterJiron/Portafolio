import { useState, useEffect } from 'react';

/**
 * Hook para detectar la sección activa en el viewport
 * @param {string[]} sectionIds - IDs de las secciones a observar
 * @param {number} threshold - Umbral de visibilidad (0-1)
 * @returns {string} - ID de la sección activa
 */
const useActiveSection = (sectionIds = [], threshold = 0.5) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (!sectionIds.length) return;

        const options = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: threshold
        };

        const observers = new Map();

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        // Crear observers para cada sección
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                const observer = new IntersectionObserver(handleIntersect, options);
                observer.observe(element);
                observers.set(id, observer);
            }
        });

        // Limpiar observers al desmontar
        return () => {
            observers.forEach((observer, id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
                observer.disconnect();
            });
        };
    }, [sectionIds, threshold]);

    return activeSection;
};

export default useActiveSection;