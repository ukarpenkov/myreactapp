import React from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import UserItem from './UserItem'



let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return < div >
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <UserItem user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow} />
                )}
        </ div >
    </ div >
}

export default Users


// let Users = (props) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }

//     return < div >
//         <div>
//             {pages.map(p => {
//                 return <span className={props.currentPage === p && s.selectedPage}
//                     onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
//             })}
//         </div>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <NavLink to={'/profile/' + u.id}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
//                         </NavLink>
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
//                                 props.toggleFollowingProgress(true, u.id)
//                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//                                     withCredentials: true,
//                                     headers: {
//                                         "API-KEY": "d40d50fa-1ffd-46f2-b0cd-1e36d2b2c38f"
//                                     }
//                                 })
//                                     .then(response => {
//                                         if (response.data.resultCode == 0) {
//                                             props.unfollow(u.id)
//                                         }
//                                         props.toggleFollowingProgress(false, u.id)
//                                     })
//                             }}>Unfollow</button>
//                             : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
//                                 props.toggleFollowingProgress(true, u.id)
//                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
//                                     withCredentials: true,
//                                     headers: {
//                                         "API-KEY": "d40d50fa-1ffd-46f2-b0cd-1e36d2b2c38f"
//                                     }
//                                 })
//                                     .then(response => {
//                                         if (response.data.resultCode == 0) {
//                                             props.follow(u.id)
//                                         }
//                                         props.toggleFollowingProgress(false, u.id)
//                                     })
//                             }}>Follow</button>}



//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </ div >
// }


// <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
//                                 props.toggleFollowingProgress(true, u.id)
//                                 usersAPI.follow(u.id).then(data => {
//                                     if (data.resultCode == 0) {
//                                         props.follow(u.id)
//                                     }
//                                     props.toggleFollowingProgress(false, u.id)
//                                 })
//                             }}>Follow</button>}