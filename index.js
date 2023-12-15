const vacancies = []
function menuExecute() {
    userInput = ""
    do {
        userInput = menuPrompt()
        switch (userInput) {
            case "1":
                availableJobs()
                break
            case "2": 
                createVacancy()
                break
            case "3":
                vizualizeVacancy()
                break
            case "4": 
                signIn()
                break
            case "5":
                deleteVacancy()
                break
            case "6":
                window.alert("saindo...")
                break
            default:
                window.alert("comando desconhecido")
        }
    }
    while(userInput !== "6")
      
    }
    menuExecute()


function menuPrompt() {
    const menu = prompt("1. Lista de vagas disponiveis\n 2. Criar um nova vaga\n 3. Vizualizar uma vaga\n 4. Inscrever um candidato em uma vaga\n 5. Ecluir uma vaga\n 6. Sair")
    return menu
}

function availableJobs() {
    const jobs = vacancies.reduce(function (accumulatedValue, vacancies, vacancyIndex) {
        accumulatedValue +=  vacancyIndex + 1 + ". " + vacancies.vacancyName + ` inscritos: ${vacancies.allVacancies}\n`
        return accumulatedValue
    }, "")

    return alert(jobs)
}

function createVacancy() {
    const vacancyName = prompt("Nome da vaga: ")
    const description = prompt("Descrição da vaga: ")
    const expirationDate  = prompt("Data limete: ")
    const allVacancies = 0
    const candidates = []

    const vacancy = {
        vacancyName : vacancyName,
        description : description,
        expirationDate : expirationDate,
        allVacancies : allVacancies,
        candidates : candidates
    }
    vacancies.push(vacancy)
}
 
function vizualizeVacancy() {
    const i = prompt("Indice da vaga: ")
    const index = i - 1
    const vacancy = vacancies[index]
    const candidatesNames = vacancy.candidates.reduce(function(finalText, vacancy) {
        finalText += "\n ." + vacancy
        return finalText
    }, "")

    const text = vacancy.vacancyName + "\n indice: " + i + "\n descrição: " + vacancy.description + "\n data limite: " + vacancy.expirationDate + "\n quantidade de candidatos: " + vacancy.allVacancies + "\n candidatos: " + candidatesNames

    return alert(text)
}

function  signIn() {
    const name = prompt("Seu nome: ")
    const vacancyIndex = prompt("Index da vaga: ")
    const index = vacancyIndex - 1

    alert("Cadastro confirmado")
    vacancies[index].candidates.push(name)
    vacancies[index].allVacancies ++
}

function deleteVacancy() {
    const i = prompt("Indice da vaga que será excluido: ")
    const index = i - 1
    const vacancy = vacancies[index]
    const candidatesNames = vacancy.candidates.reduce(function(finalText, vacancy) {
        finalText += "\n ." + vacancy
        return finalText
    }, "")

    const text = vacancy.vacancyName + "\n indice: " + i + "\n descrição: " + vacancy.description + "\n data limite: " + vacancy.expirationDate + "\n quantidade de candidatos: " + vacancy.allVacancies + "\n candidatos: " + candidatesNames

    const result = confirm(text)
    if(result === true) {
        vacancies.splice(index, 1)
    }
    else {
        alert("A vaga não será excluida")
    }
}

