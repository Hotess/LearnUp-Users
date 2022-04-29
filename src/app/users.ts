export interface Users {
    id: number,
    fullName: string,
    address: string,
}

const arrLastName: string[] = ['Маркелов', 'Усов', 'Малахов', 'Сизов', 'Жилин', 'Волошин', 'Сухов', 'Хромов', 'Белкин', 'Сухарев', 'Сотников', 'Макаров', 'Сергеев', 'Иванов', 'Чижов'];
const arrName: string[] = ['Михаил', 'Павел', 'Сергей', 'Пётр', 'Александр', 'Олег', 'Юрий', 'Вася', 'Евгений', 'Никита', 'Владислав', 'Рустам', 'Руслан', 'Андрей', 'Вячеслав'];
const arrPatronymic: string[] = ['Антонинович', 'Антипиевич', 'Анисимович', 'Сергеевич', 'Валентинович', 'Владимирович', 'Валерьевич', 'Олегович', 'Андреевич', 'Ануфриевич', 'Ардальонович', 'Арсениевич', 'Артёмович', 'Борисович', 'Вадимович'];
const arrAddress: string[] = ['Мининская д 11', 'Звёздный бульвар д 12', 'Авиамоторный проезд д 1', 'Авиамоторный проезд д 2', 'Авиамоторный проезд д 3', 'Аргуновскся д 15', 'Аргуновскся д 14', 'Пушкинская д 10', 'Пушкинская д 19', 'Пушкинская д 8', 'Пушкинская д 7', 'Отрадное д 20', 'Отрадное д 21', 'Отрадное д 22', 'Отрадное д 21'];

const createUser = function (id: number, name: string[], lastName: string[], address: string[]): Users {
    return {
        id: id,
        fullName: `${lastName[countRandom(lastName)]} ${name[countRandom(name)]} ${arrPatronymic[countRandom(arrPatronymic)]}`,
        address: address[countRandom(address)]
    };
}

export const arrUsers = function () {
    const dataUsers: Users[] = [];
    let count: number = 1;

    while (count <= 100) {
        const createdUsers = createUser(count, arrName, arrLastName, arrAddress);
        dataUsers.push(createdUsers);
        count++;
    }

    return dataUsers;
}

const countRandom = function (arr: string[]): number {
    return Math.ceil(Math.random() * arr.length - 1);
}