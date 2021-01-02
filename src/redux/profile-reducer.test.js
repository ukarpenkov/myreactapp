import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi! How are you???', likesCount: 12 },
        { id: 2, message: 'You looking good!!!', likesCount: 386 },
        { id: 3, message: 'You looking good!!!', likesCount: 386 },
        { id: 4, message: 'You looking good!!!', likesCount: 386 },
    ]
}


test('posts length >5', () => {
    let action = addPostActionCreator('Юра')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
});
test('New Post - Юра', () => {
    let action = addPostActionCreator('Юра')
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('Юра')
});
test('length<4 after del post', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});
test('Если id не корректный, то кол-во постов не меняется', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});