# Miles Front-end Challenge

!['grafica'](./public/Picture1.png)


## Objective: Map the Rewards with the Categories

Consider a reward related company like "Groupon" which have several rewards like R1, R2, R3, R4 and R5 that are categorized between categories like C1, C2, C3, C4, and C5.

## Requirements:
1. A reward can be a part of multiple categories. 
Eg:
R1 -> C1
R2 -> C2, C3 and so on...
You can drag a reward to achieve this functionality shown by red dotted lines.

2. A reward can be removed from any category. You have a cross on the reward R4 which helps to remove the reward from that category only.

3. A reward can also be dragged between the swimlanes. In such a case, the reward gets removed from the former swimlane. 

4. The reward should always stay in the reward swimlane so that you can keep dragging in one or more categories.  (Each row is a swimlane.  The red arrows show movement within a swimlane.)

5. Provide an undo/redo button.

6. Provide a “save” button that saves the arrangement to localStorage.  Feel free to save to a backend if you’d like to.

5. Once you have completed the challenge, deploy on the cloud of your choice and give us the link to evaluate.  We will require the source code for the technical phone screen.

## Evaluation Basis
*	Ensure that your code is bug free and is hosted on a publicly accessible site.
*	You must use the React framework.
*	You should demonstrate the use of a state management framework.  You may use any of redux, mobx, or rxjs.
*	You must demonstrate test cases.  Since there are DOM operations, please use the dom testinmiles g library or any alternative of your choice.
