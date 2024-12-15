function openSidebar(exerciseId) {
    const sidebar = document.getElementById("exerciseSidebar");
    const title = document.getElementById("exercise-title");
    const description = document.getElementById("exercise-description");

    // Zmienne do opisów ćwiczeń
    const exercises = {
        wyciskanie: {
            title: "Wyciskanie leżąc",
            description: "Wyciskanie leżąc to jedno z podstawowych ćwiczeń siłowych rozwijające klatkę piersiową, triceps i barki."
        },
        przysiad: {
            title: "Przysiad ze sztangą",
            description: "Przysiad ze sztangą angażuje mięśnie nóg, pośladków i dolnej części pleców."
        },
        martwyciag: {
            title: "Martwy ciąg",
            description: "Martwy ciąg to wielostawowe ćwiczenie, które wzmacnia dolną część pleców, pośladki i nogi."
        },
        biceps: {
            title: "Podciąganie na drążku",
            description: "Podciąganie to świetne ćwiczenie na rozwój mięśni pleców i bicepsów."
        },
        triceps:{
            title: "Triceps i takie tam",
            description: "TRICEK WAZNY JEST"
        }
    };

    // Ustaw tytuł i opis na podstawie wybranego ćwiczenia
    if (exercises[exerciseId]) {
        title.innerText = exercises[exerciseId].title;
        description.innerText = exercises[exerciseId].description;
    } else {
        title.innerText = "Nieznane ćwiczenie";
        description.innerText = "Opis dla tego ćwiczenia nie jest dostępny.";
    }

    // Pokaż panel boczny
    sidebar.style.right = "0";
}

function closeSidebar() {
    const sidebar = document.getElementById("exerciseSidebar");
    sidebar.style.right = "-40%"; // Ukryj panel
}
function openSidebar(exerciseId) {
    const sidebar = document.getElementById("exerciseSidebar");
    const title = document.getElementById("exercise-title");
    const description = document.getElementById("exercise-description");

    // Dane o ćwiczeniach
    const exercises = {
        wyciskanie: { title: "Wyciskanie leżąc", description: "Opis wyciskania..." },
        przysiad: { title: "Przysiad ze sztangą", description: "Opis przysiadu..." },
        martwyciag: { title: "Martwy ciąg", description: "Opis martwego ciągu..." },
        podciaganie: { title: "Podciąganie na drążku", description: "Opis podciągania..." }
    };

    // Aktualizacja zawartości
    if (exercises[exerciseId]) {
        title.innerText = exercises[exerciseId].title;
        description.innerText = exercises[exerciseId].description;
    }

    // Pokaż panel
    sidebar.style.right = "0";

    // Dodaj klasę do body
    document.body.classList.add("sidebar-open");
}

function closeSidebar() {
    const sidebar = document.getElementById("exerciseSidebar");
    sidebar.style.right = "-40%";

    // Usuń klasę z body
    document.body.classList.remove("sidebar-open");
}