export default class ChatApi{

    _apiBase = 'http://localhost:3050'

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${res.status}`)
        }

        return res.json()
    }

    getAllDialogs = async () => {
        return await this.getResources('/dialogs')
    }

    getDialog = async id => {
        return await this.getResources(`/messages?dialog=${id ? id : ''}`)
    }
 
}