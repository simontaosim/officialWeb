import React from 'react';
import {Motion, spring} from 'react-motion';
import _ from 'lodash'
import styles from './ScrollContainer.less';

const ScrollContainer = React.createClass({
  getInitialState() {
      const {pathname} = this.props;
    return {
      touchStart: 0,
      direction: 0,
      touchControl: false,
      active: 0,
      allow: false,// 为false的时候不会update component
    };
  },

  componentDidMount(){
    this.setState({
      allow: false,
      direction: 0,
      touchControl: false,
      active: 0
    })
    const {pathname} = this.props;

    this.moveTheNumberByPathName(pathname);
      this.forceUpdate();
    this.handlePageShow(this.state.active);
  },

  componentWillReceiveProps(nextProps){
    const {pathname} = this.props;
    console.log(nextProps);
    this.moveTheNumberByPathName(pathname);
    this.forceUpdate();
    // this.moveTheNumberByPathName(pathname);
  },

  handleMouseDown() {
        console.log("mouseDown");
    this.setState({active: this.props.children.length-1 });
  },

  getActiveByPathname(pathname){
    switch (pathname) {
      case "/shops":
        return 0;
        break;
      case "/shops/1":
        return 0;
        break;
      case "/shops/2":
        return 1;
        break;
      case "/shops/3":
          return 2;
      case "/shops/4":
      return 3;
      case "/shops/5":
        return 4;
      case "/shops/6":
          return 5;
      case "/shops/7":
        return 6;
      case "/brandidea":
          return 0;
      case "/brandprogress":
          return 1;
      default:
      return 0;
        break;

    }

  },

  moveTheNumberByPathName(pathname){
    switch (pathname) {
      case "/shops":
        this.setState({allow: false, active:0});
        break;
      case "/shops/1":
        this.setState({allow: true, active:1});
        break;
      case "/shops/2":
        this.setState({allow: true, active:2});
        break;
      case "/shops/3":
          this.setState({allow: true, active:3});
          break;
      case "/shops/4":
        this.setState({allow: true, active:4});
        break;
      case "/shops/5":
          this.setState({allow: true, active:5});
          break;
      case "/shops/6":
          this.setState({allow: true, active:6});
          break;
      case "/shops/7":
          this.setState({allow: true, active:7});
          break;
      case "/brandidea":
          this.setState({allow: false, active:0});
          break;
      case "/brandprogress":
          this.setState({allow: false, active:1});
          break;
      default:
        this.setState({allow: false, active:0});
        break;

    }
  },


  moveDown(){
    // console.log('this.state.active:', this.state.active)
    // console.log(' this.props.children.length-1',  this.props.children.length-1)
    // console.log("moveDown");
    this.setState({ allow: true,
                    active: this.state.active === this.props.children.length-1 ? this.props.children.length-1 : (this.state.active + 1) })
    this.handlePageShow(this.state.active+1);
  },

  moveUp(){
    this.setState({ allow: true,
                    active: this.state.active === 0 ? 0 : (this.state.active - 1) })
    this.handlePageShow(this.state.active-1);
  },

  moveTo(number){
    this.setState({allow: true, active: number})
    this.handlePageShow(number);
  },

  handlePageShow(number){
    this.props.handlePageShow(number);
  },

  shouldComponentUpdate(nextProps, nextState){
    // console.log('this state:', this.state.allow === false)
    // console.log('nextState', nextState)
    // console.log('next state:', nextState.allow === true)
    if(this.state.allow === false && nextState.allow === true){
      return true
    }else{
      return false
    }
  },

  handleOnWheel(e){
    // console.log(e.deltaY);
    // console.log(this.state.allow);
    if(e.deltaY > 0 && this.state.allow === false && this.state.active !== this.props.children.length-1)
      { this.moveDown() }
    if(e.deltaY < 0 && this.state.allow === false && this.state.active !== 0)
      { this.moveUp() }
  },

  handleTouchStart(e){
    if(this.state.touchControl === true){return}
    console.log('touch start')
    this.setState({ touchStart: e.touches[0].screenY,
                    })
  },


  handleTouchMove(e){
    if(this.state.touchControl === true){return}
    console.log('touch move')
    let direction = e.touches[0].screenY < this.state.touchStart ? 'down' : 'up'

    // console.log('111111', this.atHead() && direction == 'up')
    // console.log('222222', this.atEnd() && direction == 'down')

    if(this.atHead() && direction == 'up'){ console.log('lala');return}
    if(this.atEnd() && direction == 'down'){ console.log('haha');return}

    if( direction == 'down' ){
      this.setState({ direction: 1}) // 1 down
    } else {
      this.setState({ direction: -1}) // 0 up
    }
  },

  handleTouchEnd(e){
    if(this.state.touchControl === true){return}
    console.log('touch end')
    if(this.state.direction === 1 && !this.atEnd() ){
      // console.log('moveDown')
      this.moveDown()
      this.setState({touchControl: true})
    }
    if(this.state.direction === -1 && !this.atHead() ){
      this.moveUp()
      this.setState({touchControl: true})
    }
  },

  atHead(){
    return this.state.active === 0
  },

  atEnd(){
    return this.state.active === this.props.children.length-1
  },

  handleLinkClick(number){
    this.moveTo(number)
  },

  handleReset(){
    this.setState({
      allow: false,
      direction: 0,
      touchControl: false
    })
  },

  render() {
    console.log(this.props.pathname);

    return (
      <div>
        <ul className={styles.onepagePagination}>
          {_.map( _.times(this.props.children.length, Number), (i) => {
            return(
              <li key={i}>
                <a className={this.state.active === i ? styles.active : "" }
                   onClick={this.handleLinkClick.bind(this, i)}>
                </a>
              </li>
            )
          })}
        </ul>

        <Motion onRest={this.handleReset}
                style={{x: spring( -(this.state.active)*100 )}}>
          {({x}) =>
            <div className={styles.demo0}
                 onWheel={ this.handleOnWheel }
                 // onKeyDown={ this.handleKeyDown }
                 // onKeyPress={ this.handleKeyDown }
                 // onKeyUp={ this.handleKeyDown }
                 // onFocus={ this.handleKeyDown }
                 // onBlur={ this.handleKeyDown }
                 // onTouchCancel={ this.handleKeyDown }
                 // onTouchEnd={ this.handleKeyDown }
                 // onTouchMove={ this.handleKeyDown }
                 onTouchStart={ this.handleTouchStart }
                 onTouchMove={ this.handleTouchMove }
                 onTouchEnd={ this.handleTouchEnd }
                 style={{
                   WebkitTransform: `translate3d( 0, ${x}%, 0)`,
                   transform: `translate3d( 0, ${x}%, 0)`
                 }}>
                 {this.props.children}
            </div>
          }
        </Motion>
      </div>
    );
  },
});


export default ScrollContainer;
