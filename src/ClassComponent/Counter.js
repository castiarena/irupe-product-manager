import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    handleOnClick() {
        this.setState((prevState) => {
            const newCount = prevState.count + this.props.incrementer;
            return {
                count: newCount
            }
        });
    }

    componentDidMount(){
        console.log('cc mounted');
    }

    componentWillUnmount(){
        console.log('cc unmounted');
    }

    componentUpdateProps(props){
        
    }

    render() {
        const { incrementText } = this.props;
        const { count } = this.state;

        return (
            <div>
                <p>{count}</p>
                <button onClick={() => this.handleOnClick()}>
                    {incrementText}
                </button>  
            </div>
        );
    }

}


Counter.defaultProps = {
    incrementer: 1,
};


export default Counter;