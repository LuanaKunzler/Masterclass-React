import React from 'react' 
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho> {/* Passa todas as propriedades do Pai para o filho */}
        <Filho sobrenome={props.sobrenome}>Maria</Filho> {/* Passa uma única propriedade para o componente filho */}
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>