import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
  modelName, overlayNode, children, ...props
}) => {
  const {registerModels} = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModels({ modelName, overlayNode, sectionRef})
    }
  },[ modelName, overlayNode, registerModels])
  
  return (
    <Container ref={sectionRef} {...props}>
      { children }
    </Container>
  );
};

export default ModelSection;