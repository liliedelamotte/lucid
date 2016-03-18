import _ from 'lodash';
import React from 'react';
import Modal from '../Modal';
import Button from '../../Button/Button';

export default React.createClass({
	getInitialState() {
		return {
			isClosed: true
		};
	},

	handleOpenClose(isClosed) {
		this.setState({
			isClosed: isClosed
		});
	},

	render() {
		return (
			<div>
				<Button
					onClick={_.partial(this.handleOpenClose, !this.state.isClosed)}
				>
					Toggle
				</Button>

				<Modal
					isClosed={this.state.isClosed}
					onEscape={_.partial(this.handleOpenClose, true)}
					size='large'
				>
					<Modal.Header>
						<i>Rich Header</i>
					</Modal.Header>
					{_.times(50).map((i) => {
						return <div key={i}>Body</div>
					})}
					<Modal.Footer>
						<Button
							kind='link'
							onClick={_.partial(this.handleOpenClose, true)}
						>
							Cancel
						</Button>
						<Button kind='primary'>Save</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
});
