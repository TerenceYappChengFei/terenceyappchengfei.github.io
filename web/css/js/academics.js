const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq_question");
    const answer = item.querySelector("p");

    if (item.classList.contains("faq_item_open")) {
        gsap.set(answer, { height: "auto", opacity: 1 });
    } else {
        gsap.set(answer, { height: 0, opacity: 0, marginTop: 0 });
    }

    question.addEventListener("click", () => {
        if (item.classList.contains("faq_item_open")) {
            return;
        }

        faqItems.forEach((faqItem) => {
            const faqAnswer = faqItem.querySelector("p");
            gsap.killTweensOf(faqAnswer);
            faqItem.classList.remove("faq_item_open");

            gsap.to(faqAnswer, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        item.classList.add("faq_item_open");
        gsap.killTweensOf(answer);

        gsap.fromTo(
            answer,
            { height: 0, opacity: 0, marginTop: 0 },
            {
                height: answer.scrollHeight,
                opacity: 1,
                marginTop: 28,
                duration: 0.35,
                ease: "power2.out",
                onComplete: () => {
                    gsap.set(answer, { height: "auto" });
                },
            }
        );
    });
});
