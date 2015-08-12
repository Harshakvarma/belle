const datePickerStyle = {

  // wrapper of entire component
  wrapperStyle: {
    padding: '5px 10px',
    backgroundColor: '#00D1FF',
    borderRadius: 5,
    width: 275,
    height: 275,
    textAlign: 'center',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent'
  },

  disabledWrapperStyle: {
  },

  readOnlyWrapperStyle: {
  },

  hoverWrapperStyle: {
    //backgroundColor: '#92D6EF'
  },

  activeWrapperStyle: {
  },

  focusWrapperStyle: {
    border: '1px solid blue'
  },

  disabledHoverWrapperStyle: {
  },

  // nav-bar at top for month navigation
  navBarStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 35,
    paddingTop: 5,
    backgroundColor: '#00D1FF',
    color: 'white',
    borderRadius: 5
  },

  disabledNavBarStyle: {
  },

  readOnlyNavBarStyle: {
  },

  hoverNavBarStyle: {
  },

  disabledHoverNavBarStyle: {
  },

  // left button in nav-bar to go to previous month
  leftNavStyle: {
    cursor: 'pointer',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent'
  },

  disabledLeftNavStyle: {
    display: 'none'
  },

  readOnlyLeftNavStyle: {
  },

  hoverLeftNavStyle: {
  },

  activeLeftNavStyle: {
  },

  focusLeftNavStyle: {
    border: '1px solid blue'
  },

  disabledHoverLeftNavStyle: {
  },

  // right button in nav-bar to go to previous month
  rightNavStyle: {
    cursor: 'pointer',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent'
  },

  disabledRightNavStyle: {
    display: 'none'
  },

  readOnlyRightNavStyle: {
  },

  hoverRightNavStyle: {
  },

  activeRightNavStyle: {
  },

  focusRightNavStyle: {
    border: '1px solid blue'
  },

  disabledHoverRightNavStyle: {
  },

  // styling for month label on top of calendar
  monthLblStyle: {
    fontSize: 15
  },

  disabledMonthLblStyle: {
  },

  readOnlyMonthLblStyle: {
  },

  hoverMonthLblStyle: {
  },

  disabledHoverMonthLblStyle: {
  },

  // styling for week's header bar
  weekHeaderStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  disabledWeekHeaderStyle: {
  },

  readOnlyHeaderStyle: {
  },

  hoverHeaderStyle: {
  },

  disabledHoverWeekHeaderStyle: {
  },

  // styling for week's day label
  dayLblStyle: {
    width: 40,
    height: 30,
    backgroundColor: 'white',
    margin: 0.5,
    borderRadius: 0
  },

  disabledDayLblStyle: {
    color: 'gray',
    backgroundColor: 'lightGray'
  },

  readOnlyDayLblStyle: {
  },

  hoverDayLblStyle: {
  },

  disabledHoverDayLblStyle: {
  },

  // styling for week's row
  weekStyle: {
    display: 'flex',
    justifyContent: 'space-between',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent'
  },

  disabledWeekStyle: {
  },

  readOnlyWeekStyle: {
  },

  hoverWeekStyle: {
  },

  disabledHoverWeekStyle: {
  },

  // styling for individual day
  dayStyle: {
    width: 40,
    height: 30,
    backgroundColor: 'white',
    margin: 0.5,
    borderRadius: 0,
    cursor: 'pointer'
  },

  disabledDayStyle: {
    color: 'gray',
    backgroundColor: 'lightGray'
  },

  readOnlyDayStyle: {
  },

  hoverDayStyle: {
  },

  activeDayStyle: {
    boxShadow: 'gray 0px 0px 2px inset'
  },

  focusDayStyle: {
    border: '1px solid blue'
  },

  disabledHoverDayStyle: {
  },

  todayStyle: {
    color: 'red'
  },

  selectedDayStyle: {
    backgroundColor: 'blue',
    color: 'white'
  }

};

export default datePickerStyle;
