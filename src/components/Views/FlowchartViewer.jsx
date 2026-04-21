import React, { useCallback, useMemo } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function FlowchartViewer({ eps }) {
  // Generate nodes from EPS dynamically
  const initialNodes = useMemo(() => {
    const nodes = [];
    let currentY = 50;
    
    // 1. INICIO
    nodes.push({
      id: 'inicio',
      position: { x: 250, y: currentY },
      data: { label: 'INICIO' },
      style: { 
        background: '#0ea5e9', 
        color: '#fff', 
        borderRadius: '50px', // Oval shape
        border: '2px solid #0284c7',
        fontWeight: 'bold',
        padding: '10px 20px',
        width: 150
      }
    });

    currentY += 100;

    // 2. ENTRADAS (Verde Esmeralda - Paralelogramo simulado)
    if (eps.entradas && eps.entradas.length > 0) {
      nodes.push({
        id: 'entradas',
        position: { x: 250, y: currentY },
        data: { label: `Leer ${eps.entradas.join(', ')}` },
        style: {
          background: '#059669',
          color: '#fff',
          border: '2px solid #047857',
          padding: '10px 20px',
          fontFamily: 'monospace',
          // Skew css for parallelogram
          transform: 'skew(-15deg)',
          width: 200,
          textAlign: 'center'
        }
      });
      currentY += 100;
    }

    // 3. PROCESOS (Amarillo - Rectángulos)
    if (eps.proceso && eps.proceso.length > 0) {
      eps.proceso.forEach((proc, idx) => {
        nodes.push({
          id: `proc_${idx}`,
          position: { x: 250, y: currentY },
          data: { label: proc },
          style: {
            background: '#d97706',
            color: '#fff',
            border: '2px solid #b45309',
            padding: '10px 20px',
            fontFamily: 'monospace',
            width: 300,
            textAlign: 'center'
          }
        });
        currentY += 100;
      });
    }

    // 4. SALIDAS (Cyan - Paralelogramo simulado)
    if (eps.salidas && eps.salidas.length > 0) {
      nodes.push({
        id: 'salidas',
        position: { x: 250, y: currentY },
        data: { label: `Escribir ${eps.salidas.join(', ')}` },
        style: {
          background: '#0891b2',
          color: '#fff',
          border: '2px solid #0e7490',
          padding: '10px 20px',
          fontFamily: 'monospace',
          transform: 'skew(-15deg)',
          width: 200,
          textAlign: 'center'
        }
      });
      currentY += 100;
    }

    // 5. FIN
    nodes.push({
      id: 'fin',
      position: { x: 250, y: currentY },
      data: { label: 'FIN' },
      style: { 
        background: '#e11d48', 
        color: '#fff', 
        borderRadius: '50px', // Oval shape
        border: '2px solid #be123c',
        fontWeight: 'bold',
        padding: '10px 20px',
        width: 150
      }
    });

    // Fix inner text skewing back for parallelograms
    return nodes.map(node => {
      if (node.style.transform === 'skew(-15deg)') {
        // Need to unskew the text inside, but ReactFlow takes a string component. 
        // We'll wrap the label in a div that counter-skews.
        node.data = {
          label: <div style={{ transform: 'skew(15deg)' }}>{node.data.label}</div>
        };
      }
      return node;
    });

  }, [eps]);

  // Generate edges connecting consecutive nodes
  const initialEdges = useMemo(() => {
    const edges = [];
    for (let i = 0; i < initialNodes.length - 1; i++) {
      edges.push({
        id: `e${i}-${i+1}`,
        source: initialNodes[i].id,
        target: initialNodes[i+1].id,
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#475569', strokeWidth: 2 }
      });
    }
    return edges;
  }, [initialNodes]);

  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: 400, width: '100%' }} className="bg-slate-950/80 rounded-xl border border-slate-800">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
      >
        <Background color="#334155" gap={20} size={1} />
        <Controls className="bg-slate-900 border border-slate-700 fill-white" />
      </ReactFlow>
    </div>
  );
}
