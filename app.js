(function () {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const forma = document.getElementById("form");
    const selector = document.getElementById("phone");
    const validator = new JustValidate(forma, {
        errorFieldStyle: {
            backgroundColor: "rgba(255, 0, 0, 0.2)",
        },
    });
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
    function serializeArray() {
        if (validator.validate()) {
            let inptVacancy = document.getElementById("vacancy").value;
            let inptName = document.getElementById("fullName").value;
            let inptEmail = document.getElementById("email").value;
            let inptBorn = document.getElementById("dob").value;
            let inptPhone = document.getElementById("phone").value;
            let inpGender = document.getElementById("dob").value;
            let inptResume = document.getElementById("message").value;
            let inptAgree = document.getElementById("consent").value;

            let dataInput = {
                vacancy: inptVacancy,
                name: inptName,
                email: inptEmail,
                phone: inptPhone,
                age: inptBorn,
                gender: inpGender,
                resume: inptResume || false,
            };
            return dataInput;
        } else {
            return null;
        }
    }

    validator
        .addField("#vacancy", [
            {
                rule: "required",
                errorMessage: "Выберите вакансию",
            },
            {
                rule: "minLength",
                value: 3,
            },
        ])
        .addField("#fullName", [
            {
                rule: "required",
                errorMessage: "Введите имя",
            },
            {
                rule: "minLength",
                value: 3,
            },
            {
                rule: "maxLength",
                value: 15,
            },
        ])

        .addField("#email", [
            {
                rule: "required",
                errorMessage: "Введите почту",
            },
            {
                rule: "email",
                errorMessage: "Ошибка в почте",
            },
        ])
        .addField("#phone", [
            {
                validator: (value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Boolean(Number(phone) && phone.length > 0);
                },
                errorMessage: "Введите телефон",
            },
            {
                validator: (value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Boolean(Number(phone) && phone.length === 10);
                },
                errorMessage: "Введите телефон полностью",
            },
        ])
        .addField("#consent", [
            {
                rule: "required",
                errorMessage: "Поставте галочку",
            },
        ])
        .addField("#dob", [
            {
                rule: "required",
                errorMessage: "Введите дату рождения",
            },
            {
                validator: (value) => {
                    if (!value) return false;
                    const dob = moment(value, "YYYY-MM-DD");
                    const today = moment();
                    const age = today.diff(dob, "years");
                    return age >= 18 && age <= 150;
                },
                errorMessage: "Возраст должен быть от 18 до 150 лет",
            },
        ]);

    async function onfetch(method = "post", url, data = null) {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        };
        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                alert("Ошибка HTTP: " + response.status);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    forma.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (validator.isValid) {
            let dataInput = serializeArray();
            console.log(dataInput, " dataInput");
            onfetch("POST", url, dataInput)
                .then((data) => console.log(data, "POST"))
                .catch((err) => console.error(err));
            const title = document.querySelector(".work-title");
            title.style.display = "none";
            forma.style.display = "none";
            const success = document.querySelector(".success");
            success.style.display = "block";
            const goal = document.querySelector(".goal");
            goal.style.display = "none";

        } else {
            console.log("Данные формы не прошли валидацию");
        }
    });
})();

// ======================modal================================
var modal = document.querySelector(".modal");
var btn = document.querySelector(".copirite__politic");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    const contentHeight = modalContent.contentHeight;
    modalContent.scrollTop = 0;
    modalContent.style.height = `${contentHeight}px`;
    console.log(contentHeight, "contentHeight");
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.style.height = "auto";
}

btn.onclick = function () {
    openModal();
};

span.onclick = function () {
    closeModal();
};

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

const modalContent = document.querySelector(".modal");
const titleElement = modalContent.querySelector(".content__title");

function handleScroll() {
    const scrollPosition = modalContent.scrollTop;
    console.log(scrollPosition, "scrollPosition");

    const titleRect = titleElement.getBoundingClientRect();
    console.log(titleRect, "titleRect");
    if (titleRect.y < 0) {
        titleElement.classList.add("fixed-title");
    } else {
        titleElement.classList.remove("fixed-title");
    }
}
modalContent.addEventListener("scroll", handleScroll);
