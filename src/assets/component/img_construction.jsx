import './img_construction.css';

const ConstructionContainer = ({ children }) => {
  return (
    <div className="construction-container">
      {children}
    </div>
  );
};

const ConstructionComponent = () => {
  return (
    <ConstructionContainer>
      <div className="construction">
        <img src="/construction.png" alt="Construction" />
      </div>
    </ConstructionContainer>
  );
};

export default ConstructionComponent;
