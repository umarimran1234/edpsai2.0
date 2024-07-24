// components/FlowChart.js
'use client'
import { useState } from 'react';
import  { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css'
import { useEffect } from 'react';
import Toolbar from '../(components)/Toolbar'
import React from 'react';
const initialNodes = [
  
];
const initialEdges = [];

const FlowChart = ({command}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeName, setNodeName] = useState('');

  const addNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const removeNode = () => {
    setNodes((nds) => nds.slice(0, -1));
  };

  React.useEffect(() => {
    if (command === 'addNode') {
      addNode();
    } else if (command === 'removeNode') {
      removeNode();
    }
  }, [command]);

  return (
    <div className="h-full">
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange} 
        onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
      <Toolbar/>
    </div>
  );
};

export default FlowChart;
