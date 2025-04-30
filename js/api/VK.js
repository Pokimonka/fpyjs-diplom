/**
 * Класс VK
 * Управляет изображениями из VK. С помощью VK API.
 * С помощью этого класса будет выполняться загрузка изображений из vk.
 * Имеет свойства ACCESS_TOKEN и lastCallback
 * */
class VK {

    static ACCESS_TOKEN = '';
    static version = '5.199';

    static params = 
    {
        'access_token': this.ACCESS_TOKEN, 
        'v': this.version,
        'album_id': 'profile',
        'user_id ': '403590168',
        "э": "550130008"
    };

    static lastCallback;

    /* *
     * Получает изображения
     * */
    static get(id, callback){
        this.lastCallback = callback;
        let script = document.createElement('SCRIPT');
        script.src = 
        "https://api.vk.com/method/photos.get?" + 
        `access_token=${this.ACCESS_TOKEN}&v=5.199&`+ 
        `album_id=profile&owner_id=${id}&callback=callback`;
        script.id ='photos_get';

        document.body.appendChild(script);
    }

    /**
     * Передаётся в запрос VK API для обработки ответа.
     * Является обработчиком ответа от сервера.
     */
    static getMaxSize(photos) {
        let photosType = ['w', 'z', 'y', 'r', 'q', 'p', 'o', 'x', 'm', 's'];
        for (const type of photosType) {
            if (photos[type]) {
                return photos[type];
            }
        }
    }

    static processData(result) {
        let photosWithMaxSize = [];
        try {
            document.querySelector('#photos_get').remove();
        } catch(e) {
            alert(`Ошибка ${e.name} : ${e.message}`);
        }
        // console.log(result);
        for (const item of result.response.items) {
            let siz = {};
            for (const [id, size] of item.sizes.entries()) {
                siz[size.type] = id;
            }
            photosWithMaxSize.push(item.sizes[this.getMaxSize(siz)]);
        }
        return photosWithMaxSize;
    }
}
