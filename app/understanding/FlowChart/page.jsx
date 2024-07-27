// components/Flowchart.js
'use client';
import React, { useState, useEffect } from 'react';
import { ReactFlowProvider, ReactFlow, addEdge, MiniMap, Controls, Background, Handle, useNodesState, useEdgesState } from '@xyflow/react';
import Toolbar from '../(components)/Toolbar';
import '@xyflow/react/dist/style.css';

const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [command, setCommand] = useState(null);
 const [color , setNodeColor] = useState('#fff')
  const [nodeLabel, setNodeLabel] = useState('');

  const handleAddNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: `node${nds.length + 1}`,
        type: 'custom',
        data: { label: nodeLabel || `Node ${nds.length + 1} ` , color:color },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
      },
    ]);
  };

  const handleRemoveNode = () => {
    setNodes((nds) => {
      if (nds.length > 0) {
        return nds.slice(0, -1); // Remove the last node
      }
      return nds;
    });
  };

  useEffect(() => {
    if (command === 'addNode') {
      handleAddNode();
      setCommand(null); // Reset the command to allow adding more nodes
    } else if (command === 'removeNode') {
      handleRemoveNode();
      setCommand(null); // Reset the command to allow removing more nodes
    }
  }, [command]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const CustomNode = ({ data }) => (
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 5, background: '#888888',  }}>
      <Handle type="target" position="top" />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );

  const nodeTypes = {
    custom: CustomNode,
  };

  return (
    <ReactFlowProvider>
      <div style={{ height: '100vh', width: '95vw' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          style={{ width: '100%', height: '100%' }}
        >


          <Background />
        </ReactFlow>
        <Toolbar setCommand={setCommand}  setNodeLabel={setNodeLabel}   />
      </div>
    </ReactFlowProvider>
  );
};

export default Flowchart;
