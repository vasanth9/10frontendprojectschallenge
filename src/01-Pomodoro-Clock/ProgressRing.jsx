const ProgressRing = (props) => {
  const { radius, stroke, progress } = props;

 const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressRing;
// class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       progress: 0
//     };
//   }

//   componentDidMount() {
//     // emulating progress
//     const interval = setInterval(() => {
//       this.setState({ progress: this.state.progress + 10 });
//       if (this.state.progress === 100)
//         clearInterval(interval);
//     }, 1000);
//   }

//   render() {
//     return (
//       <ProgressRing
//         radius={ 60 }
//         stroke={ 4 }
//         progress={ this.state.progress }
//       />
//     );
//   }
// }

// ReactDOM.render(
//  <Example />,
//   document.getElementById('example')
// );
