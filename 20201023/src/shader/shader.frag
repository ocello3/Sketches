#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_mouse;

vec3 rgb(float r, float g, float b){
  return vec3(r / 255.0, g / 255.0, b / 255.0);
}

vec4 poly(vec2 center, float size, float sides, float rotation, vec3 col){
	vec2 pos = gl_FragCoord.xy - center; // move to drawingg pos
	float angle = atan(pos.x, pos.y) + PI + rotation; // angle of a pixel relative to pos
	float radius = TWO_PI / sides; // size of shape
	float d = cos(floor(0.5 + angle / radius) * radius - angle) * length(pos);
	d = 1.0 - smoothstep(size*0.5, size*0.5+1.0, d); // use the smoothstep to get soft edge
	return vec4(col, d); // / return the color with the shape as the alpha channel
}

void main () {
	vec2 center = u_resolution; // draw shape at center
  float size = u_resolution.y * 0.5; // shape size is a quarter of the screen height
  float sides = mod(floor(u_mouse), 7.0) + 3.0; // increase the sides
  float rotation = u_time; // rotation is in radians

	vec3 grn = rgb(255.0, 255.0, 255.0);

	vec4 poly = poly(center, size, sides, rotation, grn);

	poly.rgb = mix(1.0 - grn, poly.rgb, poly.a); // mix the polygon with the opposite of the green color according to the shapes alpha

	vec2 pos = gl_FragCoord.xy / u_resolution.xy;
	gl_FragColor = vec4(poly.rgb, 1.0);
}

