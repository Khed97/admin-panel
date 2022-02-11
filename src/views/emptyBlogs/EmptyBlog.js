import React from 'react'
import classes from "./EmptyBlogs.module.css"

export function EmptyBlog() {
    return (
        <div className={classes.demo}>
            
        </div>
    )
}


export function EmptyStyleCards() {
   
    return (
        <>
        <ul className={classes.Emptycards}>
        <li className={`${classes.usercard} ${classes.skeleton}`}>
    <div className={classes.usercover}>
      <img className={classes.useravatar}/>
    </div>
    <div className={classes.userdetails}>
      <div className={`${classes.username} ${classes.hidetext}`}>Yossi Abramov</div>
      <div className={`${classes.useremail} ${classes.hidetext}`}></div>
    </div>
  </li>
  <li className={`${classes.usercard} ${classes.skeleton}`}>
    <div className={classes.usercover}>
      <img className={classes.useravatar}/>
    </div>
    <div className={classes.userdetails}>
      <div className={`${classes.username} ${classes.hidetext}`}>Yossi Abramov</div>
      <div className={`${classes.useremail} ${classes.hidetext}`}></div>
    </div>
  </li>
  <li className={`${classes.usercard} ${classes.skeleton}`}>
    <div className={classes.usercover}>
      <img className={classes.useravatar}/>
    </div>
    <div className={classes.userdetails}>
      <div className={`${classes.username} ${classes.hidetext}`}>Yossi Abramov</div>
      <div className={`${classes.useremail} ${classes.hidetext}`}></div>
    </div>
  </li>

        </ul>
        </>
    )
}

export function LoadingHistoryComponent(){
  return (
    <>
    <ul className={classes.loadingcontainer}>
      <li className={classes.historyloading}></li>
      <li className={classes.historyloading}></li>
      <li className={classes.historyloading}></li>
      <li className={classes.historyloading}></li>
      <li className={classes.historyloading}></li>
      <li className={classes.historyloading}></li>
  </ul>

    </>
  )
  }