import React from 'react'

function DefaultLayout(props) {
  return (
    <div className='layout'>
        <div className="header">
            <div>
                <h1 className="logo">MONEY TRACKER</h1>
            </div>
        </div>
      <div className="contnet">
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout
