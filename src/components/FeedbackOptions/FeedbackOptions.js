import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onBtnClick }) => (
    <div>
        {options.map(option => (
        <Btn type="button" key={option} onClick={() => onBtnClick(option)}>
            {option}
        </Btn>
        ))}
    </div>
    );

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
};