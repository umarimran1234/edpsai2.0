'use client';
import React, { useState, useEffect } from 'react';
import { ReactFlowProvider, ReactFlow, addEdge, MiniMap, Controls, Background, Handle, useNodesState, useEdgesState } from '@xyflow/react';
import Toolbar from '../(components)/Toolbar';
import ButtonSection from '../(components)/Bottom';
import '@xyflow/react/dist/style.css';
import axios from 'axios';

// Define API functions
const saveProgress = async (cardId, nodes, edges) => {
  try {
    await axios.post('/api/SaveProgress', {
      cardId, 
      currentStep: 2,   
      nodes, 
      edges, 
    }); 
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

const loadProgress = async (cardId) => {
  try {
    const response = await axios.get('/api/SaveProgress', {
      params: { cardId },
    });
    return response.data;
  } catch (error) {
    console.error('Error loading progress:', error);
    return { nodes: [], edges: [] };
  }
};

const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [command, setCommand] = useState(null);
  const [color, setNodeColor] = useState('#fff');
  const [nodeLabel, setNodeLabel] = useState('');

  // Replace with actual cardId
  const cardId = 'example-card-id'; 

  // Load saved nodes and edges from the API
  useEffect(() => {
    const fetchData = async () => {
      const { nodes: savedNodes, edges: savedEdges } = await loadProgress(cardId);
      setNodes(savedNodes);
      setEdges(savedEdges);
    };

    fetchData();
  }, [cardId]);

  // Save nodes and edges to the API whenever they change
  useEffect(() => {
    saveProgress(cardId, nodes, edges);
  }, [nodes, edges, cardId]);

  const handleAddNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: `node${nds.length + 1}`,
        type: 'custom',
        data: { label: nodeLabel || `Node ${nds.length + 1}`, color: color },
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
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 5, background: '#888888' }}>
      <Handle type="target" position="top" />
      <div>{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );

  const nodeTypes = {
    custom: CustomNode,
  };

  return (
    <>
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
          <Toolbar setCommand={setCommand} setNodeLabel={setNodeLabel} />
        </div>
      </ReactFlowProvider>
      <ButtonSection back={"/Flowchart"} />
    </>
  );
};

export default Flowchart;
