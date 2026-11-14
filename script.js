
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("span");

    question.addEventListener("click", function() {

        const isOpen = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach(function(faq) {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
            faq.querySelector("span").textContent = "+";
            faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });

        // Open clicked FAQ
        if (!isOpen) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
            question.setAttribute("aria-expanded", "true");
        }

    });

    question.setAttribute("aria-expanded", "false");

});