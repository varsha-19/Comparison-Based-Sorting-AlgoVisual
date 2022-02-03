import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";

export function NavBar() {
  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
  );

  return (
    <div style={{background: 'rgba(139, 159, 213, 0.7)', color: 'white' }}>
      <div>
        <h3 align="center"><br/>Sorting Algorithms Visualizer</h3>        
      </div>      
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"          
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}            
              key={algorithm.title}
            />
          ))}
          <Tab label="Compare All" />
        </Tabs>      
    </div>
  );
}
