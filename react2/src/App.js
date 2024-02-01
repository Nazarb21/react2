// import {Character} from "./components/Character";
//
// const App = () => {
//     let characters = [
//         {
//             name: 'Bart',
//             surname: 'Simpson',
//             age: 10,
//             info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//             photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//         },
//         {
//             name: 'Homer',
//             surname: 'Simpson',
//             age: 40,
//             info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//             photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//         },
//         {
//             name: 'Marge',
//             surname: 'Simpson',
//             age: 38,
//             info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//             photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//         },
//         {
//             name: 'Lisa',
//             surname: 'Simpson',
//             age: 9,
//             info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//             photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//         },
//         {
//             name: 'Maggie',
//             surname: 'Simpson',
//             age: 1,
//             info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//             photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//         },
//     ];
//     return (
//         <div>
//             {characters.map(character => <Character name={character.name} surname={character.surname} age={character.age} info={character.info} photo={character.photo}/>)}
//         </div>
//     );
// };
//
// export {App};

import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id: 1,
            name: 'McQueen',
            status: 'Alive',
            species: 'Racing Car',
            gender: 'Male',
            image: 'https://static.wikia.nocookie.net/carspixar/images/7/70/CotR_McQueen.png/revision/latest/top-crop/width/200/height/150?cb=20220816160403&path-prefix=ru'
        },
        {
            id: 2,
            name: 'King Tuning',
            status: 'Alive',
            species: 'Racing Car',
            gender: 'Male',
            image: 'https://static.wikia.nocookie.net/carspixar/images/9/96/The_king.png/revision/latest/top-crop/width/200/height/150?cb=20180622111306&path-prefix=ru'
        },
        {
            id: 3,
            name: 'Doc Hudson',
            status: 'Died',
            species: 'Retro Car',
            gender: 'Male',
            image: 'https://static.wikia.nocookie.net/carspixar/images/d/dd/Doc_Hudson.png/revision/latest/top-crop/width/200/height/150?cb=20180311160704&path-prefix=ru'
        },
        {
            id: 4,
            name: 'Salli',
            status: 'Alive',
            species: 'Car',
            gender: 'Female',
            image: 'https://static.wikia.nocookie.net/carspixar/images/7/79/Cars3sally.png/revision/latest/top-crop/width/200/height/150?cb=20180327125818&path-prefix=ru'
        },
        {
            id: 5,
            name: 'Tech Dinoco',
            status: 'Alive',
            species: 'Retro Car',
            gender: 'Male',
            image: 'https://static.wikia.nocookie.net/carspixar/images/c/cd/%D0%A2%D0%B5%D1%85_%D0%94%D0%B8%D0%BD%D0%BE%D0%BA%D0%BE.jpg/revision/latest/top-crop/width/200/height/150?cb=20170826124946&path-prefix=ru'
        },
        {
            id: 6,
            name: 'Chico Hicks',
            status: 'Alive',
            species: 'Racing Car',
            gender: 'Male',
            image: 'https://static.wikia.nocookie.net/carspixar/images/9/94/ChickHicksCars3.png/revision/latest?cb=20180622111156&path-prefix=ru'
        }
    ]
    return (
        <div>
            {characters.map(character => <Character id={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender} img={character.image}/>)}
        </div>
    );
};

export {App};