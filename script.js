        const faqs = [
            {
                question: "Is Spark Free To Use?",
                answer: "Yes! You can use Spark for free. We also have optional plans if you want more features.",
                isOpen: false
            },
            {
                question: "Is Spark Safe?",
                answer: "Yes, Spark is safe to use and follows industry security standards.",
                isOpen: false
            },
            {
                question: "Can I Use Spark Outside My Country?",
                answer: "Absolutely, Spark works globally with internet access.",
                isOpen: false
            },
            {
                question: "What Makes Spark Different?",
                answer: "Spark offers unique features, seamless integration, and a user-friendly interface.",
                isOpen: false
            }
        ];

        const faqContainer = document.getElementById('faq-container');

        function renderFaqs() {
            faqContainer.innerHTML = '';

            faqs.forEach((faq, index) => {
                // Create question container
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('faq-question');
                questionDiv.textContent = faq.question;

                // Arrow icon
                const arrow = document.createElement('span');
                arrow.classList.add('arrow');
                arrow.textContent = '▼';
                if (faq.isOpen) arrow.classList.add('open');
                questionDiv.appendChild(arrow);

                // Create answer div
                const answerDiv = document.createElement('div');
                answerDiv.classList.add('faq-answer');
                if (faq.isOpen) answerDiv.classList.add('open');
                answerDiv.textContent = faq.answer;

                // Append question and answer to container
                faqContainer.appendChild(questionDiv);
                faqContainer.appendChild(answerDiv);

                // Add click event to toggle
                questionDiv.addEventListener('click', () => {
                    faqs[index].isOpen = !faqs[index].isOpen;
                    renderFaqs();
                });
            });
        }

        renderFaqs();
