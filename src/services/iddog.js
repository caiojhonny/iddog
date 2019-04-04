import { client } from './api'

export const getBreedList = (category = 'husky', id) => {
    let token = sessionStorage.getItem('token');
    if (!token || token === '') {
        this.props.history.push('/signup');
    } else {
        const fetchURL = `https://api-iddog.idwall.co/feed?category=${category}`;
        
        return client(fetchURL, token)
            .then(({ category, list }) => {
                if (list || category) {
                    return {
                        category,
                        dogs: list
                    }
                }
            })
    }
}