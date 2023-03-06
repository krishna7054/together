import React from 'react';

class LikeIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    handleMouseEnter = () => {
        this.setState({ hovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ hovered: false });
    }

    render() {
        const { hovered } = this.state;
        const iconStyle = {
            color: hovered ? 'red' : 'black',
            fontSize: hovered ? '1.5em' : '1em',
        };

        return (
            <i
                className="fa fa-heart"
                style={iconStyle}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }
}

export default LikeIcon;
