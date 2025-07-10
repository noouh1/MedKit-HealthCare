// CSS animations for the doctor registration form
export const injectAnimationStyles = () => {
    if (typeof document === 'undefined') return;

    const styles = `
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
};
