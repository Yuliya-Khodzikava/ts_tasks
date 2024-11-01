"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const totalPrice = ({ price, discount, isInstallment, months }) => {
    const priceWithDiscount = price * ((100 - discount) / 100);
    let result = 0;
    if (isInstallment) {
        result += priceWithDiscount / months;
    }
    else {
        result += priceWithDiscount;
    }
    return result;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
// TASK #2
const posts = [
    {
        id: '62e69d5a5458aac0ed320b35',
        title: 'id labore ex et quam laborum',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
    },
    {
        id: '62e69d5a5458aac0ed320b1c',
        title: 'quo vero reiciendis velit similique earum',
        body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
    },
    {
        id: '62e69d5a5458aac0ed320b32',
        title: 'odio adipisci rerum aut animi',
        body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
        id: '62e69d5a5458aac0ed320b39',
        title: 'alias odio sit',
        body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
    },
    {
        id: '62e69d5a5458aac0ed320b53',
        title: 'vero eaque aliquid doloribus et culpa',
        body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
    },
    {
        id: '62e69d5a5458aac0ed320b19',
        title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
    },
    {
        id: '62e69d5a5458aac0ed320b25',
        title: 'repellat consequatur praesentium vel minus molestias voluptatum',
        body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
    }
];
const normalizeData = (unnormalizedData) => {
    let result = {};
    let byId;
    let idArr = [];
    unnormalizedData.forEach(i => {
        idArr.push(i.id);
    });
    byId = unnormalizedData.reduce((acc, curr) => {
        Object.assign(acc, {
            [curr.id]: curr
        });
        return acc;
    }, {});
    result['byId'] = byId;
    result['allIds'] = idArr;
    return result;
};
console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
// TASK #3
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }
        return response.json();
    });
}
getData(COMMENTS_URL)
    .then(data => {
    data.forEach((item) => {
        console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 
