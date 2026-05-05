document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("contactSuccessModal");
    const closeButton = document.getElementById("contactModalClose");

    function showContactPopup() {
        if (modal) modal.classList.add("active");
    }

    function closeContactPopup() {
        if (modal) modal.classList.remove("active");
    }

    async function sendContactForm() {
        if (!form) return;

        const endpoint = form.action;

        const nameValue = document.getElementById("name")?.value.trim() || "";
        const emailValue = document.getElementById("email")?.value.trim() || "";
        const subjectValue = document.getElementById("subject")?.value.trim() || "";
        const messageValue = document.getElementById("message")?.value.trim() || "";

        const formattedMessage =
`Name:
- ${nameValue}

Email:
- ${emailValue}

Subject:
- ${subjectValue}

Message:
${messageValue}`;

        const fd = new FormData();
        fd.append("name", nameValue);
        fd.append("email", emailValue);
        fd.append("subject", subjectValue);
        fd.append("message", formattedMessage);
        fd.append("_subject", `New contact message: ${subjectValue}`);

        const res = await fetch(endpoint, {
            method: "POST",
            body: fd,
            headers: { Accept: "application/json" }
        });

        if (!res.ok) {
            let text = "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuche es erneut.";
            try {
                const data = await res.json();
                if (data?.errors?.length) {
                    text = data.errors.map((e) => e.message).join("\n");
                }
            } catch (_) {
            }
            throw new Error(text);
        }
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeContactPopup);
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeContactPopup();
            }
        });
    }

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const oldText = btn ? btn.textContent : "";

        try {
            if (btn) {
                btn.disabled = true;
                btn.textContent = "Sending...";
            }

            await sendContactForm();
            form.reset();
            showContactPopup();
        } catch (err) {
            alert(err.message || "Beim Senden der Nachricht ist ein Fehler aufgetreten.");
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.textContent = oldText || "Send Message";
            }
        }
    });
});