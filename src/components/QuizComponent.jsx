import './QuizComponent.css';
import PropTypes from 'prop-types';

function QuizComponent({ onPrevious, onNext, onQuit }) {
  return (
    <div className="quiz-container">
      <div className="quiz-card">
        
        <h2 className="question-title">Question</h2>
        <span className="question-number">1 of 15</span>
        <div className="question-text">
          Which is the only mammal that can jump?
        </div>
        
        <div className="options-container">
          <button className="option-button">Dog</button>
          <button className="option-button">Elephant</button>
          <button className="option-button">Goat</button>
          <button className="option-button">Lion</button>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button previous" onClick={onPrevious}>Previous</button>
          <button className="nav-button next" onClick={onNext}>Next</button>
          <button className="nav-button quit" onClick={onQuit}>Quit</button>
        </div>
      </div>
    </div>
  );
}

QuizComponent.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onQuit: PropTypes.func.isRequired,
};

export default QuizComponent;