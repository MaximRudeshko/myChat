export default class DialogsApi{

    _apiBase = 'http://localhost:3050'

    getDialogs = async (url) => {
        const res = await fetch(`${this._apiBase}/dialogs`)

        if(!res.ok){
            throw new Error(`Could not fetch ${res.status}`)
        }

        return res.json()
    }
 
}