import React from 'react';
import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';

const Page: React.FC = () => {
return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Modelo um',
            'Modelo dois',
            'Modelo tres',
            'Modelo quatro',
            'Modelo cinco',
            'Modelo seis',
            'Modelo sete'
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
              label={modelName}
              description="Modelo um, legal né"
              />
            }
          />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
