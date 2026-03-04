// Встановлюємо cookie для демонстрації
document.cookie = "SessionID=123456; path=/";

// Масив емейлів можна отримувати через /emails (тут локально)
fetch("/emails")
    .then(response => response.json())
    .then(emails => {
        const sidebar = document.getElementById("sidebar");
        const main = document.getElementById("main");

        emails.forEach(email => {
            const item = document.createElement("div");
            item.className = "email-item";
            item.textContent = `${email.sender}: ${email.subject}`;
            
            item.addEventListener("click", () => {
                main.innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
            });

            sidebar.appendChild(item);
        });
    })
    .catch(err => console.error("Error fetching emails:", err));