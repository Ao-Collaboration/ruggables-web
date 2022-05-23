import { Ruggable } from '../interfaces/Ruggable'

export const decodeRuggable = (metadata: string): Ruggable => {
	const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" customPattern="0" viewbox="0 0 400 400"><pattern id="a" viewBox="5.5,0,10,10" width="1.1" height=".4"><polygon points="-10,-10 -10,30 30,30 30,-10" fill="khaki"/><polygon points="0,5 9,1 10,1 10,2 8,4 1,5 8,6 10,8 10,9 9,9 0,5"/><polygon points="10,5 13,1 14,1  21,5 14,9 13,9 10,5"/><polygon points="13.25,2.25 14.5,5 13.25,7.75 11,5" fill="thistle"/><polygon points="14.5,2.5 15.5,4.5 18.5,4.5" fill="bisque"/><polygon points="18.5,5.5 15.5,5.5 14.5,7.5" fill="green"/><polygon points="18.5,5.5 15.5,5.5 14.5,7.5" transform="scale(-1,-1) translate(-35,-15)"/><polygon points="14.5,2.5 15.5,4.5 18.5,4.5" transform="scale(-1,-1) translate(-35,-5)"/><polygon points="13.25,2.25 14.5,5 13.25,7.75 11,5" transform="scale(-1,-1) translate(-35,-15)"/><polygon points="13.25,2.25 14.5,5 13.25,7.75 11,5" transform="scale(-1,-1) translate(-35,-5)"/><polygon points="2,5 10,5 13,9 10,9 8,6" transform="scale(-1,-1) translate(-9,-15)"/><polygon points="2,5 8,4 10,1 13,1 10,5" transform="scale(-1,-1) translate(-9,-5)"/><!--animate attributeName="x" from="0" to="-1.1" dur="10s" repeatCount="indefinite"/--><animate attributeName="y" from="0" to=".8" dur="10s" repeatCount="indefinite"/></pattern><pattern id="b" viewBox="0 0 50 50" width="100%" height="100%"><g fill="url(#a)" shape-rendering="crispedges"><polygon points="0.05,0 0.05,50 50.05,50"/><polygon points="0.05,0 0.05,50 50.05,50" transform="scale(-1,1) rotate(90 50 50) translate(0,100)"/></g></pattern><g shape-rendering="crispedges" fill="url(#b)"><rect height="200" width="200" x="0" y="0"/><rect height="200" width="200" x="0" y="0" transform="rotate(90 200 200)"/><rect height="200" width="200" x="0" y="0" transform="rotate(180 200 200)"/><rect height="200" width="200" x="0" y="0" transform="rotate(270 200 200)"/></g><rect width="400" height="400" fill="transparent" stroke="black" stroke-width="10"/>
	<g shape-rendering="crispedges">
	<polygon points="7,3 12,3 12,8 10,8 10,9 12,9 12,13 11,13 11,17 10,17 10,13 9,13 9,17 8,17 8,13 7,13 7,9 9,9 9,8 7,8" transform="scale(21,21)" fill="burlywood"/>
	<polygon points="9,5 10,5 10,6 9,6" transform="scale(21,21)" fill="blue"/>
	<polygon points="11,5 12,5 12,6 11,6" transform="scale(21,21)" fill="blue"/>
	<polygon points="7,9 8,9 8,12 7,12" transform="scale(21,21)" fill="white"/>
	<polygon points="11,9 12,9 12,12 11,12" transform="scale(21,21)" fill="white"/>
	<polygon points="8,9 11,9 11,13 8,13" transform="scale(21,21)" fill="white"/>
	<polygon points="8,12 8,14 9,14 9,15 8,15 8,16 9,16 9,13 10,13 10,16 11,16 11,15 10,15 10,14 11,14 11,12" transform="scale(21,21)" fill="steelblue"/>
	<polygon points="8,12 11,12 11,13 8,13" transform="scale(21,21)" fill="red"/>
	<polygon points="9,13 10,13 10,9 11,9 11,13 8,13 8,9 9,9" transform="scale(21,21)" fill="black"/>
	</g>
	</svg>
	`)
	//FIXME
	return {
		id: 1,
		name: metadata, //FIXME
		encodedSvg: `data:image/svg+xml;utf8,${svg}`,
	}
}
