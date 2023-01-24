const processScores = (data)=> {
  const lines = data.trim().split('\n');
  const results = {};
  lines.forEach(line => {
    const parts = line.split(',');
    const name = parts[0]
    const scores = parts.slice(1);
    const total = scores.reduce((acc, score)=>{return acc += score*1}, 0);
    const average = total/scores.length
    results[name] = average;
  })
  return results;
  }

module.exports = {
    processScores
}