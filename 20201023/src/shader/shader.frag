#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

varying vec2 vTexCoord;

void main () {
	// vec2 st = gl_FragCoord.xy/u_resolution.xy;
	gl_FragColor = vec4(vTexCoord.x, vTexCoord.y, 0.5, 1.0);
}

