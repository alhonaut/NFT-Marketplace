(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{34310:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(62140);function o(t,e,r){return void 0===e&&(e=new Uint8Array(2)),void 0===r&&(r=0),e[r+0]=t>>>8,e[r+1]=t>>>0,e}function n(t,e,r){return void 0===e&&(e=new Uint8Array(2)),void 0===r&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e}function a(t,e){return void 0===e&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}function s(t,e){return void 0===e&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}function l(t,e){return void 0===e&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}function c(t,e){return void 0===e&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}function u(t,e,r){return void 0===e&&(e=new Uint8Array(4)),void 0===r&&(r=0),e[r+0]=t>>>24,e[r+1]=t>>>16,e[r+2]=t>>>8,e[r+3]=t>>>0,e}function h(t,e,r){return void 0===e&&(e=new Uint8Array(4)),void 0===r&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e[r+2]=t>>>16,e[r+3]=t>>>24,e}function d(t,e,r){return void 0===e&&(e=new Uint8Array(8)),void 0===r&&(r=0),u(t/4294967296>>>0,e,r),u(t>>>0,e,r+4),e}function f(t,e,r){return void 0===e&&(e=new Uint8Array(8)),void 0===r&&(r=0),h(t>>>0,e,r),h(t/4294967296>>>0,e,r+4),e}e.readInt16BE=function(t,e){return void 0===e&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16},e.readUint16BE=function(t,e){return void 0===e&&(e=0),(t[e+0]<<8|t[e+1])>>>0},e.readInt16LE=function(t,e){return void 0===e&&(e=0),(t[e+1]<<8|t[e])<<16>>16},e.readUint16LE=function(t,e){return void 0===e&&(e=0),(t[e+1]<<8|t[e])>>>0},e.writeUint16BE=o,e.writeInt16BE=o,e.writeUint16LE=n,e.writeInt16LE=n,e.readInt32BE=a,e.readUint32BE=s,e.readInt32LE=l,e.readUint32LE=c,e.writeUint32BE=u,e.writeInt32BE=u,e.writeUint32LE=h,e.writeInt32LE=h,e.readInt64BE=function(t,e){void 0===e&&(e=0);var r=a(t,e),i=a(t,e+4);return 4294967296*r+i-(i>>31)*4294967296},e.readUint64BE=function(t,e){return void 0===e&&(e=0),4294967296*s(t,e)+s(t,e+4)},e.readInt64LE=function(t,e){void 0===e&&(e=0);var r=l(t,e);return 4294967296*l(t,e+4)+r-(r>>31)*4294967296},e.readUint64LE=function(t,e){void 0===e&&(e=0);var r=c(t,e);return 4294967296*c(t,e+4)+r},e.writeUint64BE=d,e.writeInt64BE=d,e.writeUint64LE=f,e.writeInt64LE=f,e.readUintBE=function(t,e,r){if(void 0===r&&(r=0),t%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var i=0,o=1,n=t/8+r-1;n>=r;n--)i+=e[n]*o,o*=256;return i},e.readUintLE=function(t,e,r){if(void 0===r&&(r=0),t%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var i=0,o=1,n=r;n<r+t/8;n++)i+=e[n]*o,o*=256;return i},e.writeUintBE=function(t,e,r,o){if(void 0===r&&(r=new Uint8Array(t/8)),void 0===o&&(o=0),t%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!i.isSafeInteger(e))throw Error("writeUintBE value must be an integer");for(var n=1,a=t/8+o-1;a>=o;a--)r[a]=e/n&255,n*=256;return r},e.writeUintLE=function(t,e,r,o){if(void 0===r&&(r=new Uint8Array(t/8)),void 0===o&&(o=0),t%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!i.isSafeInteger(e))throw Error("writeUintLE value must be an integer");for(var n=1,a=o;a<o+t/8;a++)r[a]=e/n&255,n*=256;return r},e.readFloat32BE=function(t,e){return void 0===e&&(e=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(e)},e.readFloat32LE=function(t,e){return void 0===e&&(e=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(e,!0)},e.readFloat64BE=function(t,e){return void 0===e&&(e=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(e)},e.readFloat64LE=function(t,e){return void 0===e&&(e=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(e,!0)},e.writeFloat32BE=function(t,e,r){return void 0===e&&(e=new Uint8Array(4)),void 0===r&&(r=0),new DataView(e.buffer,e.byteOffset,e.byteLength).setFloat32(r,t),e},e.writeFloat32LE=function(t,e,r){return void 0===e&&(e=new Uint8Array(4)),void 0===r&&(r=0),new DataView(e.buffer,e.byteOffset,e.byteLength).setFloat32(r,t,!0),e},e.writeFloat64BE=function(t,e,r){return void 0===e&&(e=new Uint8Array(8)),void 0===r&&(r=0),new DataView(e.buffer,e.byteOffset,e.byteLength).setFloat64(r,t),e},e.writeFloat64LE=function(t,e,r){return void 0===e&&(e=new Uint8Array(8)),void 0===r&&(r=0),new DataView(e.buffer,e.byteOffset,e.byteLength).setFloat64(r,t,!0),e}},51040:function(t,e,r){"use strict";var i=r(48733),o=r(66508),n=r(55277),a=r(34310),s=r(51448);e.Cv=32,e.WH=12,e.pg=16;var l=new Uint8Array(16),c=function(){function t(t){if(this.nonceLength=e.WH,this.tagLength=e.pg,t.length!==e.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(t)}return t.prototype.seal=function(t,e,r,o){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(t,s.length-t.length);var l=new Uint8Array(32);i.stream(this._key,s,l,4);var c=e.length+this.tagLength;if(o){if(o.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");a=o}else a=new Uint8Array(c);return i.streamXOR(this._key,s,e,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),l,a.subarray(0,a.length-this.tagLength),r),n.wipe(s),a},t.prototype.open=function(t,e,r,o){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(e.length<this.tagLength)return null;var a,l=new Uint8Array(16);l.set(t,l.length-t.length);var c=new Uint8Array(32);i.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,e.subarray(0,e.length-this.tagLength),r),!s.equal(u,e.subarray(e.length-this.tagLength,e.length)))return null;var h=e.length-this.tagLength;if(o){if(o.length!==h)throw Error("ChaCha20Poly1305: incorrect destination length");a=o}else a=new Uint8Array(h);return i.streamXOR(this._key,l,e.subarray(0,e.length-this.tagLength),a,4),n.wipe(l),a},t.prototype.clean=function(){return n.wipe(this._key),this},t.prototype._authenticate=function(t,e,r,i){var s=new o.Poly1305(e);i&&(s.update(i),i.length%16>0&&s.update(l.subarray(i.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);i&&a.writeUint64LE(i.length,c),s.update(c),a.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),h=0;h<u.length;h++)t[h]=u[h];s.clean(),n.wipe(u),n.wipe(c)},t}();e.OK=c},48733:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(34310),o=r(55277);function n(t,e,r,n,a){if(void 0===a&&(a=0),32!==t.length)throw Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==e.length&&12!==e.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-e.length,s.set(e,l)}else{if(16!==e.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=e,l=a}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(t,e,r){for(var o=r[3]<<24|r[2]<<16|r[1]<<8|r[0],n=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],h=r[31]<<24|r[30]<<16|r[29]<<8|r[28],d=e[3]<<24|e[2]<<16|e[1]<<8|e[0],f=e[7]<<24|e[6]<<16|e[5]<<8|e[4],p=e[11]<<24|e[10]<<16|e[9]<<8|e[8],g=e[15]<<24|e[14]<<16|e[13]<<8|e[12],w=1634760805,b=857760878,m=2036477234,v=1797285236,y=o,x=n,C=a,E=s,_=l,D=c,$=u,k=h,A=d,S=f,O=p,I=g,T=0;T<20;T+=2)A^=w=w+y|0,y^=_=_+(A=A>>>16|A<<16)|0,y=y>>>20|y<<12,S^=b=b+x|0,x^=D=D+(S=S>>>16|S<<16)|0,x=x>>>20|x<<12,O^=m=m+C|0,C^=$=$+(O=O>>>16|O<<16)|0,C=C>>>20|C<<12,I^=v=v+E|0,E^=k=k+(I=I>>>16|I<<16)|0,E=E>>>20|E<<12,O^=m=m+C|0,C^=$=$+(O=O>>>24|O<<8)|0,C=C>>>25|C<<7,I^=v=v+E|0,E^=k=k+(I=I>>>24|I<<8)|0,E=E>>>25|E<<7,S^=b=b+x|0,x^=D=D+(S=S>>>24|S<<8)|0,x=x>>>25|x<<7,A^=w=w+y|0,y^=_=_+(A=A>>>24|A<<8)|0,y=y>>>25|y<<7,I^=w=w+x|0,x^=$=$+(I=I>>>16|I<<16)|0,x=x>>>20|x<<12,A^=b=b+C|0,C^=k=k+(A=A>>>16|A<<16)|0,C=C>>>20|C<<12,S^=m=m+E|0,E^=_=_+(S=S>>>16|S<<16)|0,E=E>>>20|E<<12,O^=v=v+y|0,y^=D=D+(O=O>>>16|O<<16)|0,y=y>>>20|y<<12,S^=m=m+E|0,E^=_=_+(S=S>>>24|S<<8)|0,E=E>>>25|E<<7,O^=v=v+y|0,y^=D=D+(O=O>>>24|O<<8)|0,y=y>>>25|y<<7,A^=b=b+C|0,C^=k=k+(A=A>>>24|A<<8)|0,C=C>>>25|C<<7,I^=w=w+x|0,x^=$=$+(I=I>>>24|I<<8)|0,x=x>>>25|x<<7;i.writeUint32LE(w+1634760805|0,t,0),i.writeUint32LE(b+857760878|0,t,4),i.writeUint32LE(m+2036477234|0,t,8),i.writeUint32LE(v+1797285236|0,t,12),i.writeUint32LE(y+o|0,t,16),i.writeUint32LE(x+n|0,t,20),i.writeUint32LE(C+a|0,t,24),i.writeUint32LE(E+s|0,t,28),i.writeUint32LE(_+l|0,t,32),i.writeUint32LE(D+c|0,t,36),i.writeUint32LE($+u|0,t,40),i.writeUint32LE(k+h|0,t,44),i.writeUint32LE(A+d|0,t,48),i.writeUint32LE(S+f|0,t,52),i.writeUint32LE(O+p|0,t,56),i.writeUint32LE(I+g|0,t,60)}(c,s,t);for(var h=u;h<u+64&&h<r.length;h++)n[h]=r[h]^c[h-u];!function(t,e,r){for(var i=1;r--;)i=i+(255&t[e])|0,t[e]=255&i,i>>>=8,e++;if(i>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return o.wipe(c),0===a&&o.wipe(s),n}e.streamXOR=n,e.stream=function(t,e,r,i){return void 0===i&&(i=0),o.wipe(r),n(t,e,r,r,i)}},51448:function(t,e){"use strict";function r(t,e){if(t.length!==e.length)return 0;for(var r=0,i=0;i<t.length;i++)r|=t[i]^e[i];return 1&r-1>>>8}Object.defineProperty(e,"__esModule",{value:!0}),e.select=function(t,e,r){return~(t-1)&e|t-1&r},e.lessOrEqual=function(t,e){return(0|t)-(0|e)-1>>>31&1},e.compare=r,e.equal=function(t,e){return 0!==t.length&&0!==e.length&&0!==r(t,e)}},12621:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isSerializableHash=function(t){return void 0!==t.saveState&&void 0!==t.restoreState&&void 0!==t.cleanSavedState}},20342:function(t,e,r){"use strict";var i=r(9922),o=r(55277),n=function(){function t(t,e,r,o){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=o;var n=i.hmac(this._hash,r,e);this._hmac=new i.HMAC(t,n),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(0===t)throw Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(t){for(var e=new Uint8Array(t),r=0;r<e.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),e[r]=this._buffer[this._bufpos++];return e},t.prototype.clean=function(){this._hmac.clean(),o.wipe(this._buffer),o.wipe(this._counter),this._bufpos=0},t}();e.t=n},9922:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(12621),o=r(51448),n=r(55277),a=function(){function t(t,e){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);e.length>this.blockSize?this._inner.update(e).finish(r).clean():r.set(e);for(var o=0;o<r.length;o++)r[o]^=54;this._inner.update(r);for(var o=0;o<r.length;o++)r[o]^=106;this._outer.update(r),i.isSerializableHash(this._inner)&&i.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),n.wipe(r)}return t.prototype.reset=function(){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){i.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),i.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(t){return this._inner.update(t),this},t.prototype.finish=function(t){return this._finished?this._outer.finish(t):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0),this},t.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},t.prototype.saveState=function(){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(t){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(t){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},t}();e.HMAC=a,e.hmac=function(t,e,r){var i=new a(t,e);i.update(r);var o=i.digest();return i.clean(),o},e.equal=o.equal},62140:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mul=Math.imul||function(t,e){var r=65535&t,i=65535&e;return r*i+((t>>>16&65535)*i+r*(e>>>16&65535)<<16>>>0)|0},e.add=function(t,e){return t+e|0},e.sub=function(t,e){return t-e|0},e.rotl=function(t,e){return t<<e|t>>>32-e},e.rotr=function(t,e){return t<<32-e|t>>>e},e.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(t){return e.isInteger(t)&&t>=-e.MAX_SAFE_INTEGER&&t<=e.MAX_SAFE_INTEGER}},66508:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(51448),o=r(55277);e.DIGEST_LENGTH=16;var n=function(){function t(t){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=t[0]|t[1]<<8;this._r[0]=8191&r;var i=t[2]|t[3]<<8;this._r[1]=(r>>>13|i<<3)&8191;var o=t[4]|t[5]<<8;this._r[2]=(i>>>10|o<<6)&7939;var n=t[6]|t[7]<<8;this._r[3]=(o>>>7|n<<9)&8191;var a=t[8]|t[9]<<8;this._r[4]=(n>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=t[10]|t[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var l=t[12]|t[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=t[14]|t[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=t[16]|t[17]<<8,this._pad[1]=t[18]|t[19]<<8,this._pad[2]=t[20]|t[21]<<8,this._pad[3]=t[22]|t[23]<<8,this._pad[4]=t[24]|t[25]<<8,this._pad[5]=t[26]|t[27]<<8,this._pad[6]=t[28]|t[29]<<8,this._pad[7]=t[30]|t[31]<<8}return t.prototype._blocks=function(t,e,r){for(var i=this._fin?0:2048,o=this._h[0],n=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],h=this._h[7],d=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],w=this._r[2],b=this._r[3],m=this._r[4],v=this._r[5],y=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var _,D=t[e+0]|t[e+1]<<8;o+=8191&D;var $=t[e+2]|t[e+3]<<8;n+=(D>>>13|$<<3)&8191;var k=t[e+4]|t[e+5]<<8;a+=($>>>10|k<<6)&8191;var A=t[e+6]|t[e+7]<<8;s+=(k>>>7|A<<9)&8191;var S=t[e+8]|t[e+9]<<8;l+=(A>>>4|S<<12)&8191,c+=S>>>1&8191;var O=t[e+10]|t[e+11]<<8;u+=(S>>>14|O<<2)&8191;var I=t[e+12]|t[e+13]<<8;h+=(O>>>11|I<<5)&8191;var T=t[e+14]|t[e+15]<<8;d+=(I>>>8|T<<8)&8191,f+=T>>>5|i;var R=0;R=(_=0+o*p+5*E*n+5*C*a+5*x*s+5*y*l)>>>13,_&=8191,_+=5*v*c+5*m*u+5*b*h+5*w*d+5*g*f,R+=_>>>13,_&=8191;var N=R;N+=o*g+n*p+5*E*a+5*C*s+5*x*l,R=N>>>13,N&=8191,N+=5*y*c+5*v*u+5*m*h+5*b*d+5*w*f,R+=N>>>13,N&=8191;var P=R;P+=o*w+n*g+a*p+5*E*s+5*C*l,R=P>>>13,P&=8191,P+=5*x*c+5*y*u+5*v*h+5*m*d+5*b*f,R+=P>>>13,P&=8191;var U=R;U+=o*b+n*w+a*g+s*p+5*E*l,R=U>>>13,U&=8191,U+=5*C*c+5*x*u+5*y*h+5*v*d+5*m*f,R+=U>>>13,U&=8191;var B=R;B+=o*m+n*b+a*w+s*g+l*p,R=B>>>13,B&=8191,B+=5*E*c+5*C*u+5*x*h+5*y*d+5*v*f,R+=B>>>13,B&=8191;var M=R;M+=o*v+n*m+a*b+s*w+l*g,R=M>>>13,M&=8191,M+=c*p+5*E*u+5*C*h+5*x*d+5*y*f,R+=M>>>13,M&=8191;var L=R;L+=o*y+n*v+a*m+s*b+l*w,R=L>>>13,L&=8191,L+=c*g+u*p+5*E*h+5*C*d+5*x*f,R+=L>>>13,L&=8191;var j=R;j+=o*x+n*y+a*v+s*m+l*b,R=j>>>13,j&=8191,j+=c*w+u*g+h*p+5*E*d+5*C*f,R+=j>>>13,j&=8191;var z=R;z+=o*C+n*x+a*y+s*v+l*m,R=z>>>13,z&=8191,z+=c*b+u*w+h*g+d*p+5*E*f,R+=z>>>13,z&=8191;var W=R;W+=o*E+n*C+a*x+s*y+l*v,R=W>>>13,W&=8191,W+=c*m+u*b+h*w+d*g+f*p,R+=W>>>13,W&=8191,_=8191&(R=(R=(R<<2)+R|0)+_|0),R>>>=13,N+=R,o=_,n=N,a=P,s=U,l=B,c=M,u=L,h=j,d=z,f=W,e+=16,r-=16}this._h[0]=o,this._h[1]=n,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=h,this._h[8]=d,this._h[9]=f},t.prototype.finish=function(t,e){void 0===e&&(e=0);var r,i,o,n,a=new Uint16Array(10);if(this._leftover){for(n=this._leftover,this._buffer[n++]=1;n<16;n++)this._buffer[n]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,n=2;n<10;n++)this._h[n]+=r,r=this._h[n]>>>13,this._h[n]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,n=1;n<10;n++)a[n]=this._h[n]+r,r=a[n]>>>13,a[n]&=8191;for(a[9]-=8192,i=(1^r)-1,n=0;n<10;n++)a[n]&=i;for(n=0,i=~i;n<10;n++)this._h[n]=this._h[n]&i|a[n];for(n=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,o=this._h[0]+this._pad[0],this._h[0]=65535&o;n<8;n++)o=(this._h[n]+this._pad[n]|0)+(o>>>16)|0,this._h[n]=65535&o;return t[e+0]=this._h[0]>>>0,t[e+1]=this._h[0]>>>8,t[e+2]=this._h[1]>>>0,t[e+3]=this._h[1]>>>8,t[e+4]=this._h[2]>>>0,t[e+5]=this._h[2]>>>8,t[e+6]=this._h[3]>>>0,t[e+7]=this._h[3]>>>8,t[e+8]=this._h[4]>>>0,t[e+9]=this._h[4]>>>8,t[e+10]=this._h[5]>>>0,t[e+11]=this._h[5]>>>8,t[e+12]=this._h[6]>>>0,t[e+13]=this._h[6]>>>8,t[e+14]=this._h[7]>>>0,t[e+15]=this._h[7]>>>8,this._finished=!0,this},t.prototype.update=function(t){var e,r=0,i=t.length;if(this._leftover){(e=16-this._leftover)>i&&(e=i);for(var o=0;o<e;o++)this._buffer[this._leftover+o]=t[r+o];if(i-=e,r+=e,this._leftover+=e,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(i>=16&&(e=i-i%16,this._blocks(t,r,e),r+=e,i-=e),i){for(var o=0;o<i;o++)this._buffer[this._leftover+o]=t[r+o];this._leftover+=i}return this},t.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var t=new Uint8Array(16);return this.finish(t),t},t.prototype.clean=function(){return o.wipe(this._buffer),o.wipe(this._r),o.wipe(this._h),o.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},t}();e.Poly1305=n,e.oneTimeAuth=function(t,e){var r=new n(t);r.update(e);var i=r.digest();return r.clean(),i},e.equal=function(t,r){return t.length===e.DIGEST_LENGTH&&r.length===e.DIGEST_LENGTH&&i.equal(t,r)}},35077:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;let i=r(62739),o=r(34310),n=r(55277);function a(t,r=e.defaultRandomSource){return r.randomBytes(t)}e.defaultRandomSource=new i.SystemRandomSource,e.randomBytes=a,e.randomUint32=function(t=e.defaultRandomSource){let r=a(4,t),i=(0,o.readUint32LE)(r);return(0,n.wipe)(r),i};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(t,r=s,i=e.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let o="",l=r.length,c=256-256%l;for(;t>0;){let e=a(Math.ceil(256*t/c),i);for(let i=0;i<e.length&&t>0;i++){let n=e[i];n<c&&(o+=r.charAt(n%l),t--)}(0,n.wipe)(e)}return o}e.randomString=l,e.randomStringForEntropy=function(t,r=s,i=e.defaultRandomSource){return l(Math.ceil(t/(Math.log(r.length)/Math.LN2)),r,i)}},85183:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&void 0!==t.getRandomValues&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let e=new Uint8Array(t);for(let t=0;t<e.length;t+=65536)this._crypto.getRandomValues(e.subarray(t,t+Math.min(e.length-t,65536)));return e}}e.BrowserRandomSource=r},32586:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NodeRandomSource=void 0;let i=r(55277);class o{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let t=r(35883);t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let e=this._crypto.randomBytes(t);if(e.length!==t)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(t);for(let t=0;t<r.length;t++)r[t]=e[t];return(0,i.wipe)(e),r}}e.NodeRandomSource=o},62739:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SystemRandomSource=void 0;let i=r(85183),o=r(32586);class n{constructor(){if(this.isAvailable=!1,this.name="",this._source=new i.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new o.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(t)}}e.SystemRandomSource=n},87853:function(t,e,r){"use strict";var i=r(34310),o=r(55277);e.k=32,e.cn=64;var n=function(){function t(){this.digestLength=e.k,this.blockSize=e.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return t.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},t.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},t.prototype.clean=function(){o.wipe(this._buffer),o.wipe(this._temp),this.reset()},t.prototype.update=function(t,e){if(void 0===e&&(e=t.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=e,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&e>0;)this._buffer[this._bufferLength++]=t[r++],e--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(e>=this.blockSize&&(r=s(this._temp,this._state,t,r,e),e%=this.blockSize);e>0;)this._buffer[this._bufferLength++]=t[r++],e--;return this},t.prototype.finish=function(t){if(!this._finished){var e=this._bytesHashed,r=this._bufferLength,o=e%64<56?64:128;this._buffer[r]=128;for(var n=r+1;n<o-8;n++)this._buffer[n]=0;i.writeUint32BE(e/536870912|0,this._buffer,o-8),i.writeUint32BE(e<<3,this._buffer,o-4),s(this._temp,this._state,this._buffer,0,o),this._finished=!0}for(var n=0;n<this.digestLength/4;n++)i.writeUint32BE(this._state[n],t,4*n);return this},t.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},t.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},t.prototype.restoreState=function(t){return this._state.set(t.state),this._bufferLength=t.bufferLength,t.buffer&&this._buffer.set(t.buffer),this._bytesHashed=t.bytesHashed,this._finished=!1,this},t.prototype.cleanSavedState=function(t){o.wipe(t.state),t.buffer&&o.wipe(t.buffer),t.bufferLength=0,t.bytesHashed=0},t}();e.mE=n;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(t,e,r,o,n){for(;n>=64;){for(var s=e[0],l=e[1],c=e[2],u=e[3],h=e[4],d=e[5],f=e[6],p=e[7],g=0;g<16;g++){var w=o+4*g;t[g]=i.readUint32BE(r,w)}for(var g=16;g<64;g++){var b=t[g-2],m=(b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,v=((b=t[g-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3;t[g]=(m+t[g-7]|0)+(v+t[g-16]|0)}for(var g=0;g<64;g++){var m=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&d^~h&f)|0)+(p+(a[g]+t[g]|0)|0)|0,v=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=d,d=h,h=u+m|0,u=c,c=l,l=s,s=m+v|0}e[0]+=s,e[1]+=l,e[2]+=c,e[3]+=u,e[4]+=h,e[5]+=d,e[6]+=f,e[7]+=p,o+=64,n-=64}return o}e.vp=function(t){var e=new n;e.update(t);var r=e.digest();return e.clean(),r}},55277:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wipe=function(t){for(var e=0;e<t.length;e++)t[e]=0;return t}},38195:function(t,e,r){"use strict";e.gi=e.Au=e.KS=e.kz=void 0;let i=r(35077),o=r(55277);function n(t){let e=new Float64Array(16);if(t)for(let r=0;r<t.length;r++)e[r]=t[r];return e}e.kz=32,e.KS=32;let a=new Uint8Array(32);a[0]=9;let s=n([56129,1]);function l(t){let e=1;for(let r=0;r<16;r++){let i=t[r]+e+65535;e=Math.floor(i/65536),t[r]=i-65536*e}t[0]+=e-1+37*(e-1)}function c(t,e,r){let i=~(r-1);for(let r=0;r<16;r++){let o=i&(t[r]^e[r]);t[r]^=o,e[r]^=o}}function u(t,e,r){for(let i=0;i<16;i++)t[i]=e[i]+r[i]}function h(t,e,r){for(let i=0;i<16;i++)t[i]=e[i]-r[i]}function d(t,e,r){let i,o,n=0,a=0,s=0,l=0,c=0,u=0,h=0,d=0,f=0,p=0,g=0,w=0,b=0,m=0,v=0,y=0,x=0,C=0,E=0,_=0,D=0,$=0,k=0,A=0,S=0,O=0,I=0,T=0,R=0,N=0,P=0,U=r[0],B=r[1],M=r[2],L=r[3],j=r[4],z=r[5],W=r[6],H=r[7],F=r[8],Z=r[9],V=r[10],q=r[11],K=r[12],Y=r[13],G=r[14],X=r[15];n+=(i=e[0])*U,a+=i*B,s+=i*M,l+=i*L,c+=i*j,u+=i*z,h+=i*W,d+=i*H,f+=i*F,p+=i*Z,g+=i*V,w+=i*q,b+=i*K,m+=i*Y,v+=i*G,y+=i*X,a+=(i=e[1])*U,s+=i*B,l+=i*M,c+=i*L,u+=i*j,h+=i*z,d+=i*W,f+=i*H,p+=i*F,g+=i*Z,w+=i*V,b+=i*q,m+=i*K,v+=i*Y,y+=i*G,x+=i*X,s+=(i=e[2])*U,l+=i*B,c+=i*M,u+=i*L,h+=i*j,d+=i*z,f+=i*W,p+=i*H,g+=i*F,w+=i*Z,b+=i*V,m+=i*q,v+=i*K,y+=i*Y,x+=i*G,C+=i*X,l+=(i=e[3])*U,c+=i*B,u+=i*M,h+=i*L,d+=i*j,f+=i*z,p+=i*W,g+=i*H,w+=i*F,b+=i*Z,m+=i*V,v+=i*q,y+=i*K,x+=i*Y,C+=i*G,E+=i*X,c+=(i=e[4])*U,u+=i*B,h+=i*M,d+=i*L,f+=i*j,p+=i*z,g+=i*W,w+=i*H,b+=i*F,m+=i*Z,v+=i*V,y+=i*q,x+=i*K,C+=i*Y,E+=i*G,_+=i*X,u+=(i=e[5])*U,h+=i*B,d+=i*M,f+=i*L,p+=i*j,g+=i*z,w+=i*W,b+=i*H,m+=i*F,v+=i*Z,y+=i*V,x+=i*q,C+=i*K,E+=i*Y,_+=i*G,D+=i*X,h+=(i=e[6])*U,d+=i*B,f+=i*M,p+=i*L,g+=i*j,w+=i*z,b+=i*W,m+=i*H,v+=i*F,y+=i*Z,x+=i*V,C+=i*q,E+=i*K,_+=i*Y,D+=i*G,$+=i*X,d+=(i=e[7])*U,f+=i*B,p+=i*M,g+=i*L,w+=i*j,b+=i*z,m+=i*W,v+=i*H,y+=i*F,x+=i*Z,C+=i*V,E+=i*q,_+=i*K,D+=i*Y,$+=i*G,k+=i*X,f+=(i=e[8])*U,p+=i*B,g+=i*M,w+=i*L,b+=i*j,m+=i*z,v+=i*W,y+=i*H,x+=i*F,C+=i*Z,E+=i*V,_+=i*q,D+=i*K,$+=i*Y,k+=i*G,A+=i*X,p+=(i=e[9])*U,g+=i*B,w+=i*M,b+=i*L,m+=i*j,v+=i*z,y+=i*W,x+=i*H,C+=i*F,E+=i*Z,_+=i*V,D+=i*q,$+=i*K,k+=i*Y,A+=i*G,S+=i*X,g+=(i=e[10])*U,w+=i*B,b+=i*M,m+=i*L,v+=i*j,y+=i*z,x+=i*W,C+=i*H,E+=i*F,_+=i*Z,D+=i*V,$+=i*q,k+=i*K,A+=i*Y,S+=i*G,O+=i*X,w+=(i=e[11])*U,b+=i*B,m+=i*M,v+=i*L,y+=i*j,x+=i*z,C+=i*W,E+=i*H,_+=i*F,D+=i*Z,$+=i*V,k+=i*q,A+=i*K,S+=i*Y,O+=i*G,I+=i*X,b+=(i=e[12])*U,m+=i*B,v+=i*M,y+=i*L,x+=i*j,C+=i*z,E+=i*W,_+=i*H,D+=i*F,$+=i*Z,k+=i*V,A+=i*q,S+=i*K,O+=i*Y,I+=i*G,T+=i*X,m+=(i=e[13])*U,v+=i*B,y+=i*M,x+=i*L,C+=i*j,E+=i*z,_+=i*W,D+=i*H,$+=i*F,k+=i*Z,A+=i*V,S+=i*q,O+=i*K,I+=i*Y,T+=i*G,R+=i*X,v+=(i=e[14])*U,y+=i*B,x+=i*M,C+=i*L,E+=i*j,_+=i*z,D+=i*W,$+=i*H,k+=i*F,A+=i*Z,S+=i*V,O+=i*q,I+=i*K,T+=i*Y,R+=i*G,N+=i*X,y+=(i=e[15])*U,x+=i*B,C+=i*M,E+=i*L,_+=i*j,D+=i*z,$+=i*W,k+=i*H,A+=i*F,S+=i*Z,O+=i*V,I+=i*q,T+=i*K,R+=i*Y,N+=i*G,P+=i*X,n+=38*x,a+=38*C,s+=38*E,l+=38*_,c+=38*D,u+=38*$,h+=38*k,d+=38*A,f+=38*S,p+=38*O,g+=38*I,w+=38*T,b+=38*R,m+=38*N,v+=38*P,o=Math.floor((i=n+(o=1)+65535)/65536),n=i-65536*o,o=Math.floor((i=a+o+65535)/65536),a=i-65536*o,o=Math.floor((i=s+o+65535)/65536),s=i-65536*o,o=Math.floor((i=l+o+65535)/65536),l=i-65536*o,o=Math.floor((i=c+o+65535)/65536),c=i-65536*o,o=Math.floor((i=u+o+65535)/65536),u=i-65536*o,o=Math.floor((i=h+o+65535)/65536),h=i-65536*o,o=Math.floor((i=d+o+65535)/65536),d=i-65536*o,o=Math.floor((i=f+o+65535)/65536),f=i-65536*o,o=Math.floor((i=p+o+65535)/65536),p=i-65536*o,o=Math.floor((i=g+o+65535)/65536),g=i-65536*o,o=Math.floor((i=w+o+65535)/65536),w=i-65536*o,o=Math.floor((i=b+o+65535)/65536),b=i-65536*o,o=Math.floor((i=m+o+65535)/65536),m=i-65536*o,o=Math.floor((i=v+o+65535)/65536),v=i-65536*o,o=Math.floor((i=y+o+65535)/65536),y=i-65536*o,n+=o-1+37*(o-1),o=Math.floor((i=n+(o=1)+65535)/65536),n=i-65536*o,o=Math.floor((i=a+o+65535)/65536),a=i-65536*o,o=Math.floor((i=s+o+65535)/65536),s=i-65536*o,o=Math.floor((i=l+o+65535)/65536),l=i-65536*o,o=Math.floor((i=c+o+65535)/65536),c=i-65536*o,o=Math.floor((i=u+o+65535)/65536),u=i-65536*o,o=Math.floor((i=h+o+65535)/65536),h=i-65536*o,o=Math.floor((i=d+o+65535)/65536),d=i-65536*o,o=Math.floor((i=f+o+65535)/65536),f=i-65536*o,o=Math.floor((i=p+o+65535)/65536),p=i-65536*o,o=Math.floor((i=g+o+65535)/65536),g=i-65536*o,o=Math.floor((i=w+o+65535)/65536),w=i-65536*o,o=Math.floor((i=b+o+65535)/65536),b=i-65536*o,o=Math.floor((i=m+o+65535)/65536),m=i-65536*o,o=Math.floor((i=v+o+65535)/65536),v=i-65536*o,o=Math.floor((i=y+o+65535)/65536),y=i-65536*o,n+=o-1+37*(o-1),t[0]=n,t[1]=a,t[2]=s,t[3]=l,t[4]=c,t[5]=u,t[6]=h,t[7]=d,t[8]=f,t[9]=p,t[10]=g,t[11]=w,t[12]=b,t[13]=m,t[14]=v,t[15]=y}function f(t,e){let r=new Uint8Array(32),i=new Float64Array(80),o=n(),a=n(),f=n(),p=n(),g=n(),w=n();for(let e=0;e<31;e++)r[e]=t[e];r[31]=127&t[31]|64,r[0]&=248,function(t,e){for(let r=0;r<16;r++)t[r]=e[2*r]+(e[2*r+1]<<8);t[15]&=32767}(i,e);for(let t=0;t<16;t++)a[t]=i[t];o[0]=p[0]=1;for(let t=254;t>=0;--t){let e=r[t>>>3]>>>(7&t)&1;c(o,a,e),c(f,p,e),u(g,o,f),h(o,o,f),u(f,a,p),h(a,a,p),d(p,g,g),d(w,o,o),d(o,f,o),d(f,a,g),u(g,o,f),h(o,o,f),d(a,o,o),h(f,p,w),d(o,f,s),u(o,o,p),d(f,f,o),d(o,p,w),d(p,a,i),d(a,g,g),c(o,a,e),c(f,p,e)}for(let t=0;t<16;t++)i[t+16]=o[t],i[t+32]=f[t],i[t+48]=a[t],i[t+64]=p[t];let b=i.subarray(32),m=i.subarray(16);!function(t,e){let r=n();for(let t=0;t<16;t++)r[t]=e[t];for(let t=253;t>=0;t--)d(r,r,r),2!==t&&4!==t&&d(r,r,e);for(let e=0;e<16;e++)t[e]=r[e]}(b,b),d(m,m,b);let v=new Uint8Array(32);return!function(t,e){let r=n(),i=n();for(let t=0;t<16;t++)i[t]=e[t];l(i),l(i),l(i);for(let t=0;t<2;t++){r[0]=i[0]-65517;for(let t=1;t<15;t++)r[t]=i[t]-65535-(r[t-1]>>16&1),r[t-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let t=r[15]>>16&1;r[14]&=65535,c(i,r,1-t)}for(let e=0;e<16;e++)t[2*e]=255&i[e],t[2*e+1]=i[e]>>8}(v,m),v}e.Au=function(t){let r=(0,i.randomBytes)(32,t),n=function(t){if(t.length!==e.KS)throw Error(`x25519: seed must be ${e.KS} bytes`);let r=new Uint8Array(t);return{publicKey:f(r,a),secretKey:r}}(r);return(0,o.wipe)(r),n},e.gi=function(t,r,i=!1){if(t.length!==e.kz)throw Error("X25519: incorrect secret key length");if(r.length!==e.kz)throw Error("X25519: incorrect public key length");let o=f(t,r);if(i){let t=0;for(let e=0;e<o.length;e++)t|=o[e];if(0===t)throw Error("X25519: invalid shared key")}return o}},43869:function(t,e,r){"use strict";r.d(e,{RELAY_JSONRPC:function(){return i}}),r(24584);let i={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}}},24584:function(){},72852:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(83343),e),i.__exportStar(r(38520),e)},83343:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_THOUSAND=e.ONE_HUNDRED=void 0,e.ONE_HUNDRED=100,e.ONE_THOUSAND=1e3},38520:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=5*e.ONE_MINUTE,e.TEN_MINUTES=10*e.ONE_MINUTE,e.THIRTY_MINUTES=30*e.ONE_MINUTE,e.SIXTY_MINUTES=60*e.ONE_MINUTE,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=3*e.ONE_HOUR,e.SIX_HOURS=6*e.ONE_HOUR,e.TWELVE_HOURS=12*e.ONE_HOUR,e.TWENTY_FOUR_HOURS=24*e.ONE_HOUR,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=3*e.ONE_DAY,e.FIVE_DAYS=5*e.ONE_DAY,e.SEVEN_DAYS=7*e.ONE_DAY,e.THIRTY_DAYS=30*e.ONE_DAY,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=2*e.ONE_WEEK,e.THREE_WEEKS=3*e.ONE_WEEK,e.FOUR_WEEKS=4*e.ONE_WEEK,e.ONE_YEAR=365*e.ONE_DAY},58619:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(6954),e),i.__exportStar(r(91895),e),i.__exportStar(r(21087),e),i.__exportStar(r(72852),e)},21087:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(1812).__exportStar(r(36448),e)},36448:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.IWatch=void 0;class r{}e.IWatch=r},24810:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fromMiliseconds=e.toMiliseconds=void 0;let i=r(72852);e.toMiliseconds=function(t){return t*i.ONE_THOUSAND},e.fromMiliseconds=function(t){return Math.floor(t/i.ONE_THOUSAND)}},18995:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.delay=void 0,e.delay=function(t){return new Promise(e=>{setTimeout(()=>{e(!0)},t)})}},6954:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let i=r(1812);i.__exportStar(r(18995),e),i.__exportStar(r(24810),e)},91895:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(t){if(this.timestamps.has(t))throw Error(`Watch already started for label: ${t}`);this.timestamps.set(t,{started:Date.now()})}stop(t){let e=this.get(t);if(void 0!==e.elapsed)throw Error(`Watch already stopped for label: ${t}`);let r=Date.now()-e.started;this.timestamps.set(t,{started:e.started,elapsed:r})}get(t){let e=this.timestamps.get(t);if(void 0===e)throw Error(`No timestamp found for label: ${t}`);return e}elapsed(t){let e=this.get(t);return e.elapsed||Date.now()-e.started}}e.Watch=r,e.default=r},1812:function(t,e,r){"use strict";r.r(e),r.d(e,{__assign:function(){return n},__asyncDelegator:function(){return y},__asyncGenerator:function(){return v},__asyncValues:function(){return x},__await:function(){return m},__awaiter:function(){return u},__classPrivateFieldGet:function(){return D},__classPrivateFieldSet:function(){return $},__createBinding:function(){return d},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return o},__generator:function(){return h},__importDefault:function(){return _},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return g},__rest:function(){return a},__spread:function(){return w},__spreadArrays:function(){return b},__values:function(){return p}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function o(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)0>e.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]]);return r}function s(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}function l(t,e){return function(r,i){e(r,i,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function u(t,e,r,i){return new(r||(r=Promise))(function(o,n){function a(t){try{l(i.next(t))}catch(t){n(t)}}function s(t){try{l(i.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(a,s)}l((i=i.apply(t,e||[])).next())})}function h(t,e){var r,i,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}}function d(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}function f(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||(e[r]=t[r])}function p(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,o,n=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a}function w(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(g(arguments[e]));return t}function b(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;e<r;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,o++)i[o]=n[a];return i}function m(t){return this instanceof m?(this.v=t,this):new m(t)}function v(t,e,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,o=r.apply(t,e||[]),n=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(t){o[t]&&(i[t]=function(e){return new Promise(function(r,i){n.push([t,e,r,i])>1||s(t,e)})})}function s(t,e){try{var r;(r=o[t](e)).value instanceof m?Promise.resolve(r.value.v).then(l,c):u(n[0][2],r)}catch(t){u(n[0][3],t)}}function l(t){s("next",t)}function c(t){s("throw",t)}function u(t,e){t(e),n.shift(),n.length&&s(n[0][0],n[0][1])}}function y(t){var e,r;return e={},i("next"),i("throw",function(t){throw t}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,o){e[i]=t[i]?function(e){return(r=!r)?{value:m(t[i](e)),done:"return"===i}:o?o(e):e}:o}}function x(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=p(t),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(e){return new Promise(function(i,o){!function(t,e,r,i){Promise.resolve(i).then(function(e){t({value:e,done:r})},e)}(i,o,(e=t[r](e)).done,e.value)})}}}function C(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function _(t){return t&&t.__esModule?t:{default:t}}function D(t,e){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return e.get(t)}function $(t,e,r){if(!e.has(t))throw TypeError("attempted to set private field on non-instance");return e.set(t,r),r}},43824:function(t,e,r){"use strict";let i=r(67116),o=r(58005),n=r(34470),a=r(61820),s=t=>null==t,l=Symbol("encodeFragmentIdentifier");function c(t){if("string"!=typeof t||1!==t.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(t,e){return e.encode?e.strict?i(t):encodeURIComponent(t):t}function h(t,e){return e.decode?o(t):t}function d(t){let e=t.indexOf("#");return -1!==e&&(t=t.slice(0,e)),t}function f(t){let e=(t=d(t)).indexOf("?");return -1===e?"":t.slice(e+1)}function p(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):e.parseBooleans&&null!==t&&("true"===t.toLowerCase()||"false"===t.toLowerCase())&&(t="true"===t.toLowerCase()),t}function g(t,e){c((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);let r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,i)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){i[t]=r;return}void 0===i[t]&&(i[t]={}),i[t][e[1]]=r};case"bracket":return(t,r,i)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){i[t]=r;return}if(void 0===i[t]){i[t]=[r];return}i[t]=[].concat(i[t],r)};case"colon-list-separator":return(t,r,i)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){i[t]=r;return}if(void 0===i[t]){i[t]=[r];return}i[t]=[].concat(i[t],r)};case"comma":case"separator":return(e,r,i)=>{let o="string"==typeof r&&r.includes(t.arrayFormatSeparator),n="string"==typeof r&&!o&&h(r,t).includes(t.arrayFormatSeparator);r=n?h(r,t):r;let a=o||n?r.split(t.arrayFormatSeparator).map(e=>h(e,t)):null===r?r:h(r,t);i[e]=a};case"bracket-separator":return(e,r,i)=>{let o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o){i[e]=r?h(r,t):r;return}let n=null===r?[]:r.split(t.arrayFormatSeparator).map(e=>h(e,t));if(void 0===i[e]){i[e]=n;return}i[e]=[].concat(i[e],n)};default:return(t,e,r)=>{if(void 0===r[t]){r[t]=e;return}r[t]=[].concat(r[t],e)}}}(e),i=Object.create(null);if("string"!=typeof t||!(t=t.trim().replace(/^[?#&]/,"")))return i;for(let o of t.split("&")){if(""===o)continue;let[t,a]=n(e.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?a:h(a,e),r(h(t,e),a,i)}for(let t of Object.keys(i)){let r=i[t];if("object"==typeof r&&null!==r)for(let t of Object.keys(r))r[t]=p(r[t],e);else i[t]=p(r,e)}return!1===e.sort?i:(!0===e.sort?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce((t,e)=>{let r=i[e];return r&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(r):t[e]=r,t},Object.create(null))}e.extract=f,e.parse=g,e.stringify=(t,e)=>{if(!t)return"";c((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);let r=r=>e.skipNull&&s(t[r])||e.skipEmptyString&&""===t[r],i=function(t){switch(t.arrayFormat){case"index":return e=>(r,i)=>{let o=r.length;return void 0===i||t.skipNull&&null===i||t.skipEmptyString&&""===i?r:null===i?[...r,[u(e,t),"[",o,"]"].join("")]:[...r,[u(e,t),"[",u(o,t),"]=",u(i,t)].join("")]};case"bracket":return e=>(r,i)=>void 0===i||t.skipNull&&null===i||t.skipEmptyString&&""===i?r:null===i?[...r,[u(e,t),"[]"].join("")]:[...r,[u(e,t),"[]=",u(i,t)].join("")];case"colon-list-separator":return e=>(r,i)=>void 0===i||t.skipNull&&null===i||t.skipEmptyString&&""===i?r:null===i?[...r,[u(e,t),":list="].join("")]:[...r,[u(e,t),":list=",u(i,t)].join("")];case"comma":case"separator":case"bracket-separator":{let e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(i,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?i:(o=null===o?"":o,0===i.length)?[[u(r,t),e,u(o,t)].join("")]:[[i,u(o,t)].join(t.arrayFormatSeparator)]}default:return e=>(r,i)=>void 0===i||t.skipNull&&null===i||t.skipEmptyString&&""===i?r:null===i?[...r,u(e,t)]:[...r,[u(e,t),"=",u(i,t)].join("")]}}(e),o={};for(let e of Object.keys(t))r(e)||(o[e]=t[e]);let n=Object.keys(o);return!1!==e.sort&&n.sort(e.sort),n.map(r=>{let o=t[r];return void 0===o?"":null===o?u(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?u(r,e)+"[]":o.reduce(i(r),[]).join("&"):u(r,e)+"="+u(o,e)}).filter(t=>t.length>0).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);let[r,i]=n(t,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:h(i,e)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let i=d(t.url).split("?")[0]||"",o=e.extract(t.url),n=Object.assign(e.parse(o,{sort:!1}),t.query),a=e.stringify(n,r);a&&(a=`?${a}`);let s=function(t){let e="",r=t.indexOf("#");return -1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(s=`#${r[l]?u(t.fragmentIdentifier,r):t.fragmentIdentifier}`),`${i}${a}${s}`},e.pick=(t,r,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[l]:!1},i);let{url:o,query:n,fragmentIdentifier:s}=e.parseUrl(t,i);return e.stringifyUrl({url:o,query:a(n,r),fragmentIdentifier:s},i)},e.exclude=(t,r,i)=>{let o=Array.isArray(r)?t=>!r.includes(t):(t,e)=>!r(t,e);return e.pick(t,o,i)}},849:function(t,e){"use strict";function r(t){let e;return"undefined"!=typeof window&&void 0!==window[t]&&(e=window[t]),e}function i(t){let e=r(t);if(!e)throw Error(`${t} is not defined in Window`);return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getLocalStorage=e.getLocalStorageOrThrow=e.getCrypto=e.getCryptoOrThrow=e.getLocation=e.getLocationOrThrow=e.getNavigator=e.getNavigatorOrThrow=e.getDocument=e.getDocumentOrThrow=e.getFromWindowOrThrow=e.getFromWindow=void 0,e.getFromWindow=r,e.getFromWindowOrThrow=i,e.getDocumentOrThrow=function(){return i("document")},e.getDocument=function(){return r("document")},e.getNavigatorOrThrow=function(){return i("navigator")},e.getNavigator=function(){return r("navigator")},e.getLocationOrThrow=function(){return i("location")},e.getLocation=function(){return r("location")},e.getCryptoOrThrow=function(){return i("crypto")},e.getCrypto=function(){return r("crypto")},e.getLocalStorageOrThrow=function(){return i("localStorage")},e.getLocalStorage=function(){return r("localStorage")}},36073:function(t,e,r){"use strict";e.D=void 0;let i=r(849);e.D=function(){let t,e,r;try{t=i.getDocumentOrThrow(),e=i.getLocationOrThrow()}catch(t){return null}function o(...e){let r=t.getElementsByTagName("meta");for(let t=0;t<r.length;t++){let i=r[t],o=["itemprop","property","name"].map(t=>i.getAttribute(t)).filter(t=>!!t&&e.includes(t));if(o.length&&o){let t=i.getAttribute("content");if(t)return t}}return""}let n=((r=o("name","og:site_name","og:title","twitter:title"))||(r=t.title),r),a=o("description","og:description","twitter:description","keywords");return{description:a,url:e.origin,icons:function(){let r=t.getElementsByTagName("link"),i=[];for(let t=0;t<r.length;t++){let o=r[t],n=o.getAttribute("rel");if(n&&n.toLowerCase().indexOf("icon")>-1){let t=o.getAttribute("href");if(t){if(-1===t.toLowerCase().indexOf("https:")&&-1===t.toLowerCase().indexOf("http:")&&0!==t.indexOf("//")){let r=e.protocol+"//"+e.host;if(0===t.indexOf("/"))r+=t;else{let i=e.pathname.split("/");i.pop(),r+=i.join("/")+"/"+t}i.push(r)}else if(0===t.indexOf("//")){let r=e.protocol+t;i.push(r)}else i.push(t)}}}return i}(),name:n}}},34699:function(t,e){"use strict";e.byteLength=function(t){var e=l(t),r=e[0],i=e[1];return(r+i)*3/4-i},e.toByteArray=function(t){var e,r,n=l(t),a=n[0],s=n[1],c=new o((a+s)*3/4-s),u=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],c[u++]=e>>16&255,c[u++]=e>>8&255,c[u++]=255&e;return 2===s&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,c[u++]=255&e),1===s&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,c[u++]=e>>8&255,c[u++]=255&e),c},e.fromByteArray=function(t){for(var e,i=t.length,o=i%3,n=[],a=0,s=i-o;a<s;a+=16383)n.push(function(t,e,i){for(var o,n=[],a=e;a<i;a+=3)n.push(r[(o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return n.join("")}(t,a,a+16383>s?s:a+16383));return 1===o?n.push(r[(e=t[i-1])>>2]+r[e<<4&63]+"=="):2===o&&n.push(r[(e=(t[i-2]<<8)+t[i-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),n.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=n.length;a<s;++a)r[a]=n[a],i[n.charCodeAt(a)]=a;function l(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var i=r===e?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},67133:function(t,e,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let i=r(34699),o=r(19087),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,s.prototype),e}function s(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return u(t)}return l(t,e,r)}function l(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!s.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|p(t,e),i=a(r),o=i.write(t,e);return o!==r&&(i=i.slice(0,o)),i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(B(t,Uint8Array)){let e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(B(t,ArrayBuffer)||t&&B(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(B(t,SharedArrayBuffer)||t&&B(t.buffer,SharedArrayBuffer)))return d(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return s.from(i,e,r);let o=function(t){var e;if(s.isBuffer(t)){let e=0|f(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?a(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function u(t){return c(t),a(t<0?0:0|f(t))}function h(t){let e=t.length<0?0:0|f(t.length),r=a(e);for(let i=0;i<e;i+=1)r[i]=255&t[i];return r}function d(t,e,r){let i;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),s.prototype),i}function f(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function p(t,e){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||B(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return P(t).length;default:if(o)return i?-1:N(t).length;e=(""+e).toLowerCase(),o=!0}}function g(t,e,r){let o=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i);let o="";for(let i=e;i<r;++i)o+=M[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return v(this,e,r);case"ascii":return function(t,e,r){let i="";r=Math.min(t.length,r);for(let o=e;o<r;++o)i+=String.fromCharCode(127&t[o]);return i}(this,e,r);case"latin1":case"binary":return function(t,e,r){let i="";r=Math.min(t.length,r);for(let o=e;o<r;++o)i+=String.fromCharCode(t[o]);return i}(this,e,r);case"base64":var n,a;return n=e,a=r,0===n&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(n,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let i=t.slice(e,r),o="";for(let t=0;t<i.length-1;t+=2)o+=String.fromCharCode(i[t]+256*i[t+1]);return o}(this,e,r);default:if(o)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function w(t,e,r){let i=t[e];t[e]=t[r],t[r]=i}function b(t,e,r,i,o){var n;if(0===t.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(n=r=+r)!=n&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof e&&(e=s.from(e,i)),s.isBuffer(e))return 0===e.length?-1:m(t,e,r,i,o);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,i,o);throw TypeError("val must be string, number or Buffer")}function m(t,e,r,i,o){let n,a=1,s=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){let i=-1;for(n=r;n<s;n++)if(c(t,n)===c(e,-1===i?0:n-i)){if(-1===i&&(i=n),n-i+1===l)return i*a}else -1!==i&&(n-=n-i),i=-1}else for(r+l>s&&(r=s-l),n=r;n>=0;n--){let r=!0;for(let i=0;i<l;i++)if(c(t,n+i)!==c(e,i)){r=!1;break}if(r)return n}return -1}function v(t,e,r){r=Math.min(t.length,r);let i=[],o=e;for(;o<r;){let e=t[o],n=null,a=e>239?4:e>223?3:e>191?2:1;if(o+a<=r){let r,i,s,l;switch(a){case 1:e<128&&(n=e);break;case 2:(192&(r=t[o+1]))==128&&(l=(31&e)<<6|63&r)>127&&(n=l);break;case 3:r=t[o+1],i=t[o+2],(192&r)==128&&(192&i)==128&&(l=(15&e)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(n=l);break;case 4:r=t[o+1],i=t[o+2],s=t[o+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(l=(15&e)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(n=l)}}null===n?(n=65533,a=1):n>65535&&(n-=65536,i.push(n>>>10&1023|55296),n=56320|1023&n),i.push(n),o+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let r="",i=0;for(;i<e;)r+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return r}(i)}function y(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function x(t,e,r,i,o,n){if(!s.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<n)throw RangeError('"value" argument is out of bounds');if(r+i>t.length)throw RangeError("Index out of range")}function C(t,e,r,i,o){O(e,i,o,t,r,7);let n=Number(e&BigInt(4294967295));t[r++]=n,n>>=8,t[r++]=n,n>>=8,t[r++]=n,n>>=8,t[r++]=n;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function E(t,e,r,i,o){O(e,i,o,t,r,7);let n=Number(e&BigInt(4294967295));t[r+7]=n,n>>=8,t[r+6]=n,n>>=8,t[r+5]=n,n>>=8,t[r+4]=n;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function _(t,e,r,i,o,n){if(r+i>t.length||r<0)throw RangeError("Index out of range")}function D(t,e,r,i,n){return e=+e,r>>>=0,n||_(t,e,r,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,r,i,23,4),r+4}function $(t,e,r,i,n){return e=+e,r>>>=0,n||_(t,e,r,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,r,i,52,8),r+8}e.Buffer=s,e.SlowBuffer=function(t){return+t!=t&&(t=0),s.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,e,r){return l(t,e,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,e,r){return(c(t),t<=0)?a(t):void 0!==e?"string"==typeof r?a(t).fill(e,r):a(t).fill(e):a(t)},s.allocUnsafe=function(t){return u(t)},s.allocUnsafeSlow=function(t){return u(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,e){if(B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,i=e.length;for(let o=0,n=Math.min(r,i);o<n;++o)if(t[o]!==e[o]){r=t[o],i=e[o];break}return r<i?-1:i<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let i=s.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){let e=t[r];if(B(e,Uint8Array))o+e.length>i.length?(s.isBuffer(e)||(e=s.from(e)),e.copy(i,o)):Uint8Array.prototype.set.call(i,e,o);else if(s.isBuffer(e))e.copy(i,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return i},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},s.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},s.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},s.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?v(this,0,t):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){let t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},n&&(s.prototype[n]=s.prototype.inspect),s.prototype.compare=function(t,e,r,i,o){if(B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||r>t.length||i<0||o>this.length)throw RangeError("out of range index");if(i>=o&&e>=r)return 0;if(i>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,i>>>=0,o>>>=0,this===t)return 0;let n=o-i,a=r-e,l=Math.min(n,a),c=this.slice(i,o),u=t.slice(e,r);for(let t=0;t<l;++t)if(c[t]!==u[t]){n=c[t],a=u[t];break}return n<a?-1:a<n?1:0},s.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},s.prototype.write=function(t,e,r,i){var o,n,a,s,l,c,u,h;if(void 0===e)i="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)i=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let f=!1;for(;;)switch(i){case"hex":return function(t,e,r,i){let o;r=Number(r)||0;let n=t.length-r;i?(i=Number(i))>n&&(i=n):i=n;let a=e.length;for(i>a/2&&(i=a/2),o=0;o<i;++o){let i=parseInt(e.substr(2*o,2),16);if(i!=i)break;t[r+o]=i}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,n=r,U(N(t,this.length-o),this,o,n);case"ascii":case"latin1":case"binary":return a=e,s=r,U(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,a,s);case"base64":return l=e,c=r,U(P(t),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=e,h=r,U(function(t,e){let r,i;let o=[];for(let n=0;n<t.length&&!((e-=2)<0);++n)i=(r=t.charCodeAt(n))>>8,o.push(r%256),o.push(i);return o}(t,this.length-u),this,u,h);default:if(f)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let i=this.subarray(t,e);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||y(t,e,this.length);let i=this[t],o=1,n=0;for(;++n<e&&(o*=256);)i+=this[t+n]*o;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||y(t,e,this.length);let i=this[t+--e],o=1;for(;e>0&&(o*=256);)i+=this[t+--e]*o;return i},s.prototype.readUint8=s.prototype.readUInt8=function(t,e){return t>>>=0,e||y(t,1,this.length),this[t]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(t,e){return t>>>=0,e||y(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(t,e){return t>>>=0,e||y(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(t,e){return t>>>=0,e||y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(t,e){return t>>>=0,e||y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readBigUInt64LE=L(function(t){I(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&T(t,this.length-8);let i=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(i)+(BigInt(o)<<BigInt(32))}),s.prototype.readBigUInt64BE=L(function(t){I(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&T(t,this.length-8);let i=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(i)<<BigInt(32))+BigInt(o)}),s.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||y(t,e,this.length);let i=this[t],o=1,n=0;for(;++n<e&&(o*=256);)i+=this[t+n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||y(t,e,this.length);let i=e,o=1,n=this[t+--i];for(;i>0&&(o*=256);)n+=this[t+--i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readInt8=function(t,e){return(t>>>=0,e||y(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},s.prototype.readInt16LE=function(t,e){t>>>=0,e||y(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){t>>>=0,e||y(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return t>>>=0,e||y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t>>>=0,e||y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readBigInt64LE=L(function(t){I(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&T(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24))<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),s.prototype.readBigInt64BE=L(function(t){I(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&T(t,this.length-8),(BigInt((e<<24)+65536*this[++t]+256*this[++t]+this[++t])<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),s.prototype.readFloatLE=function(t,e){return t>>>=0,e||y(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t>>>=0,e||y(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t>>>=0,e||y(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t>>>=0,e||y(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(t,e,r,i){if(t=+t,e>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,t,e,r,i,0)}let o=1,n=0;for(this[e]=255&t;++n<r&&(o*=256);)this[e+n]=t/o&255;return e+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(t,e,r,i){if(t=+t,e>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,t,e,r,i,0)}let o=r-1,n=1;for(this[e+o]=255&t;--o>=0&&(n*=256);)this[e+o]=t/n&255;return e+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,1,255,0),this[e]=255&t,e+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeBigUInt64LE=L(function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=L(function(t,e=0){return E(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(t,e,r,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}let o=0,n=1,a=0;for(this[e]=255&t;++o<r&&(n*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/n>>0)-a&255;return e+r},s.prototype.writeIntBE=function(t,e,r,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}let o=r-1,n=1,a=0;for(this[e+o]=255&t;--o>=0&&(n*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/n>>0)-a&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||x(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeBigInt64LE=L(function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=L(function(t,e=0){return E(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return $(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return $(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,i){if(!s.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<r&&(i=r),i===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r);let o=i-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,i):Uint8Array.prototype.set.call(t,this.subarray(r,i),e),o},s.prototype.fill=function(t,e,r,i){let o;if("string"==typeof t){if("string"==typeof e?(i=e,e=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){let e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{let n=s.isBuffer(t)?t:s.from(t,i),a=n.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=n[o%a]}return this};let k={};function A(t,e,r){k[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function S(t){let e="",r=t.length,i="-"===t[0]?1:0;for(;r>=i+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function O(t,e,r,i,o,n){if(t>r||t<e){let i;let o="bigint"==typeof e?"n":"";throw i=n>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(n+1)*8}${o}`:`>= -(2${o} ** ${(n+1)*8-1}${o}) and < 2 ** ${(n+1)*8-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new k.ERR_OUT_OF_RANGE("value",i,t)}I(o,"offset"),(void 0===i[o]||void 0===i[o+n])&&T(o,i.length-(n+1))}function I(t,e){if("number"!=typeof t)throw new k.ERR_INVALID_ARG_TYPE(e,"number",t)}function T(t,e,r){if(Math.floor(t)!==t)throw I(t,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}A("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),A("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),A("ERR_OUT_OF_RANGE",function(t,e,r){let i=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=S(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=S(o)),o+="n"),i+=` It must be ${e}. Received ${o}`},RangeError);let R=/[^+/0-9A-Za-z-_]/g;function N(t,e){let r;e=e||1/0;let i=t.length,o=null,n=[];for(let a=0;a<i;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319||a+1===i){(e-=3)>-1&&n.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&n.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&n.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;n.push(r)}else if(r<2048){if((e-=2)<0)break;n.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return n}function P(t){return i.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function U(t,e,r,i){let o;for(o=0;o<i&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}function B(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}let M=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let o=0;o<16;++o)e[i+o]=t[r]+t[o]}return e}();function L(t){return"undefined"==typeof BigInt?j:t}function j(){throw Error("BigInt not supported")}},74548:function(t){var e,r,i,o,n,a,s,l,c,u,h,d,f,p,g,w,b,m,v,y,x,C;t.exports=(e="millisecond",r="second",i="minute",o="hour",n="week",a="month",s="quarter",l="year",c="date",u="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(r)+t},(g={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}},w="$isDayjsObject",b=function(t){return t instanceof x||!(!t||!t[w])},m=function t(e,r,i){var o;if(!e)return p;if("string"==typeof e){var n=e.toLowerCase();g[n]&&(o=n),r&&(g[n]=r,o=n);var a=e.split("-");if(!o&&a.length>1)return t(a[0])}else{var s=e.name;g[s]=e,o=s}return!i&&o&&(p=o),o||!i&&p},v=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},(y={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var i=12*(r.year()-e.year())+(r.month()-e.month()),o=e.clone().add(i,a),n=r-o<0,s=e.clone().add(i+(n?-1:1),a);return+(-(i+(r-o)/(n?o-s:s-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:l,w:n,d:"day",D:c,h:o,m:i,s:r,ms:e,Q:s})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=m,y.i=b,y.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},C=(x=function(){function t(t){this.$L=m(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[w]=!0}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var o=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(t,e){var r=v(t);return this.startOf(e)<=r&&r<=this.endOf(e)},f.isAfter=function(t,e){return v(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<v(t)},f.$g=function(t,e,r){return y.u(t)?this[e]:this.set(r,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var s=this,u=!!y.u(e)||e,h=y.p(t),d=function(t,e){var r=y.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return u?r:r.endOf("day")},f=function(t,e){return y.w(s.toDate()[t].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},p=this.$W,g=this.$M,w=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case l:return u?d(1,0):d(31,11);case a:return u?d(1,g):d(0,g+1);case n:var m=this.$locale().weekStart||0,v=(p<m?p+7:p)-m;return d(u?w-v:w+(6-v),g);case"day":case c:return f(b+"Hours",0);case o:return f(b+"Minutes",1);case i:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,n){var s,u=y.p(t),h="set"+(this.$u?"UTC":""),d=((s={}).day=h+"Date",s[c]=h+"Date",s[a]=h+"Month",s[l]=h+"FullYear",s[o]=h+"Hours",s[i]=h+"Minutes",s[r]=h+"Seconds",s[e]=h+"Milliseconds",s)[u],f="day"===u?this.$D+(n-this.$W):n;if(u===a||u===l){var p=this.clone().set(c,1);p.$d[d](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,e){var s,c=this;t=Number(t);var u=y.p(e),h=function(e){var r=v(c);return y.w(r.date(r.date()+Math.round(e*t)),c)};if(u===a)return this.set(a,this.$M+t);if(u===l)return this.set(l,this.$y+t);if("day"===u)return h(1);if(u===n)return h(7);var d=((s={})[i]=6e4,s[o]=36e5,s[r]=1e3,s)[u]||1,f=this.$d.getTime()+t*d;return y.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=y.z(this),n=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,h=r.meridiem,f=function(t,r,o,n){return t&&(t[r]||t(e,i))||o[r].slice(0,n)},p=function(t){return y.s(n%12||12,t,"0")},g=h||function(t,e,r){var i=t<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return y.s(e.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,c,3);case"MMMM":return f(c,s);case"D":return e.$D;case"DD":return y.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(r.weekdaysMin,e.$W,l,2);case"ddd":return f(r.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(n);case"HH":return y.s(n,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(n,a,!0);case"A":return g(n,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(e.$s);case"ss":return y.s(e.$s,2,"0");case"SSS":return y.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var u,h=this,d=y.p(e),f=v(t),p=(f.utcOffset()-this.utcOffset())*6e4,g=this-f,w=function(){return y.m(h,f)};switch(d){case l:u=w()/12;break;case a:u=w();break;case s:u=w()/3;break;case n:u=(g-p)/6048e5;break;case"day":u=(g-p)/864e5;break;case o:u=g/36e5;break;case i:u=g/6e4;break;case r:u=g/1e3;break;default:u=g}return c?u:y.a(u)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),i=m(t,e,!0);return i&&(r.$L=i),r},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=C,[["$ms",e],["$s",r],["$m",i],["$H",o],["$W","day"],["$M",a],["$y",l],["$D",c]].forEach(function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,x,v),t.$i=!0),v},v.locale=m,v.isDayjs=b,v.unix=function(t){return v(1e3*t)},v.en=g[p],v.Ls=g,v.p={},v)},6537:function(t){t.exports=function(t,e,r){t=t||{};var i=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(t,e,r,o){return i.fromToBase(t,e,r,o)}r.en.relativeTime=o,i.fromToBase=function(e,i,n,a,s){for(var l,c,u,h=n.$locale().relativeTime||o,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,p=0;p<f;p+=1){var g=d[p];g.d&&(l=a?r(e).diff(n,g.d,!0):n.diff(e,g.d,!0));var w=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,w<=g.r||!g.r){w<=1&&p>0&&(g=d[p-1]);var b=h[g.l];s&&(w=s(""+w)),c="string"==typeof b?b.replace("%d",w):b(w,i,g.l,u);break}}if(i)return c;var m=u?h.future:h.past;return"function"==typeof m?m(c):m.replace("%s",c)},i.to=function(t,e){return n(t,e,this,!0)},i.from=function(t,e){return n(t,e,this)};var a=function(t){return t.$u?r.utc():r()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}},20239:function(t){t.exports=function(t,e,r){r.updateLocale=function(t,e){var i=r.Ls[t];if(i)return(e?Object.keys(e):[]).forEach(function(t){i[t]=e[t]}),i}}},58005:function(t){"use strict";var e="%[a-f0-9]{2}",r=RegExp("("+e+")|([^%]+?)","gi"),i=RegExp("("+e+")+","gi");t.exports=function(t){if("string"!=typeof t)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=i.exec(t);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var n=function(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r)||[],i=1;i<e.length;i++)e=(t=(function t(e,r){try{return[decodeURIComponent(e.join(""))]}catch(t){}if(1===e.length)return e;r=r||1;var i=e.slice(0,r),o=e.slice(r);return Array.prototype.concat.call([],t(i),t(o))})(e,i).join("")).match(r)||[];return t}}(o[0]);n!==o[0]&&(e[o[0]]=n)}o=i.exec(t)}e["%C2"]="�";for(var a=Object.keys(e),s=0;s<a.length;s++){var l=a[s];t=t.replace(RegExp(l,"g"),e[l])}return t}(t)}}},78343:function(t){"use strict";var e={single_source_shortest_paths:function(t,r,i){var o,n,a,s,l,c,u,h={},d={};d[r]=0;var f=e.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in n=(o=f.pop()).value,s=o.cost,l=t[n]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=d[a],(void 0===d[a]||u>c)&&(d[a]=c,f.push(a,c),h[a]=n));if(void 0!==i&&void 0===d[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],i=e;i;)r.push(i),t[i],i=t[i];return r.reverse(),r},find_path:function(t,r,i){var o=e.single_source_shortest_paths(t,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(t){var r,i=e.PriorityQueue,o={};for(r in t=t||{},i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=t.sorter||i.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},53216:function(t){"use strict";t.exports=function(t){for(var e=[],r=t.length,i=0;i<r;i++){var o=t.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var n=t.charCodeAt(i+1);n>=56320&&n<=57343&&(o=(o-55296)*1024+n-56320+65536,i+=1)}if(o<128){e.push(o);continue}if(o<2048){e.push(o>>6|192),e.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128);continue}if(o>=65536&&o<=1114111){e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}},61820:function(t){"use strict";t.exports=function(t,e){for(var r={},i=Object.keys(t),o=Array.isArray(e),n=0;n<i.length;n++){var a=i[n],s=t[a];(o?-1!==e.indexOf(a):e(a,s,t))&&(r[a]=s)}return r}},19087:function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,r,i,o){var n,a,s=8*o-i-1,l=(1<<s)-1,c=l>>1,u=-7,h=r?o-1:0,d=r?-1:1,f=t[e+h];for(h+=d,n=f&(1<<-u)-1,f>>=-u,u+=s;u>0;n=256*n+t[e+h],h+=d,u-=8);for(a=n&(1<<-u)-1,n>>=-u,u+=i;u>0;a=256*a+t[e+h],h+=d,u-=8);if(0===n)n=1-c;else{if(n===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,i),n-=c}return(f?-1:1)*a*Math.pow(2,n-i)},e.write=function(t,e,r,i,o,n){var a,s,l,c=8*n-o-1,u=(1<<c)-1,h=u>>1,d=23===o?5960464477539062e-23:0,f=i?0:n-1,p=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+h>=1?e+=d/l:e+=d*Math.pow(2,1-h),e*l>=2&&(a++,l/=2),a+h>=u?(s=0,a=u):a+h>=1?(s=(e*l-1)*Math.pow(2,o),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,o),a=0));o>=8;t[r+f]=255&s,f+=p,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;t[r+f]=255&a,f+=p,a/=256,c-=8);t[r+f-p]|=128*g}},97977:function(t){t.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},75298:function(t,e,r){let i=r(47363),o=r(37621),n=r(46028),a=r(12330);function s(t,e,r,n,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=e,e=n=void 0):3===l&&(e.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=r,r=e,e=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=e,e=n=void 0):2!==l||e.getContext||(n=r,r=e,e=void 0),new Promise(function(i,a){try{let a=o.create(r,n);i(t(a,e,n))}catch(t){a(t)}})}try{let i=o.create(r,n);a(null,t(i,e,n))}catch(t){a(t)}}e.create=o.create,e.toCanvas=s.bind(null,n.render),e.toDataURL=s.bind(null,n.renderToDataURL),e.toString=s.bind(null,function(t,e,r){return a.render(t,r)})},47363:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(t,e,r){let i=r(13400).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];let e=Math.floor(t/7)+2,r=i(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),n=[r-7];for(let t=1;t<e-1;t++)n[t]=n[t-1]-o;return n.push(6),n.reverse()},e.getPositions=function(t){let r=[],i=e.getRowColCoords(t),o=i.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)(0!==t||0!==e)&&(0!==t||e!==o-1)&&(t!==o-1||0!==e)&&r.push([i[t],i[e]]);return r}},77654:function(t,e,r){let i=r(37662),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(t){this.mode=i.ALPHANUMERIC,this.data=t}n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=n},41904:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},21091:function(t){function e(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,r,i){let o=t*this.size+e;this.data[o]=r,i&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},90690:function(t,e,r){let i=r(53216),o=r(37662);function n(t){this.mode=o.BYTE,"string"==typeof t&&(t=i(t)),this.data=new Uint8Array(t)}n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=n},37039:function(t,e,r){let i=r(9406),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case i.L:return o[(t-1)*4+0];case i.M:return o[(t-1)*4+1];case i.Q:return o[(t-1)*4+2];case i.H:return o[(t-1)*4+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case i.L:return n[(t-1)*4+0];case i.M:return n[(t-1)*4+1];case i.Q:return n[(t-1)*4+2];case i.H:return n[(t-1)*4+3];default:return}}},9406:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw Error("Unknown EC Level: "+t)}}(t)}catch(t){return r}}},78241:function(t,e,r){let i=r(13400).getSymbolSize;e.getPositions=function(t){let e=i(t);return[[0,0],[e-7,0],[0,e-7]]}},50237:function(t,e,r){let i=r(13400),o=i.getBCHDigit(1335);e.getEncodedBits=function(t,e){let r=t.bit<<3|e,n=r<<10;for(;i.getBCHDigit(n)-o>=0;)n^=1335<<i.getBCHDigit(n)-o;return(r<<10|n)^21522}},51309:function(t,e){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)r[e]=t,i[t]=e,256&(t<<=1)&&(t^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),e.log=function(t){if(t<1)throw Error("log("+t+")");return i[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[i[t]+i[e]]}},69592:function(t,e,r){let i=r(37662),o=r(13400);function n(t){this.mode=i.KANJI,this.data=t}n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),t.put(r,13)}},t.exports=n},68334:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){let e=t.size,i=0,o=0,n=0,a=null,s=null;for(let l=0;l<e;l++){o=n=0,a=s=null;for(let c=0;c<e;c++){let e=t.get(l,c);e===a?o++:(o>=5&&(i+=r.N1+(o-5)),a=e,o=1),(e=t.get(c,l))===s?n++:(n>=5&&(i+=r.N1+(n-5)),s=e,n=1)}o>=5&&(i+=r.N1+(o-5)),n>=5&&(i+=r.N1+(n-5))}return i},e.getPenaltyN2=function(t){let e=t.size,i=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){let e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);(4===e||0===e)&&i++}return i*r.N2},e.getPenaltyN3=function(t){let e=t.size,i=0,o=0,n=0;for(let r=0;r<e;r++){o=n=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(r,a),a>=10&&(1488===o||93===o)&&i++,n=n<<1&2047|t.get(a,r),a>=10&&(1488===n||93===n)&&i++}return i*r.N3},e.getPenaltyN4=function(t){let e=0,i=t.data.length;for(let r=0;r<i;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/i/5)-10)*r.N4},e.applyMask=function(t,r){let i=r.size;for(let o=0;o<i;o++)for(let n=0;n<i;n++)r.isReserved(n,o)||r.xor(n,o,function(t,r,i){switch(t){case e.Patterns.PATTERN000:return(r+i)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return i%3==0;case e.Patterns.PATTERN011:return(r+i)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case e.Patterns.PATTERN101:return r*i%2+r*i%3==0;case e.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case e.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+t)}}(t,n,o))},e.getBestMask=function(t,r){let i=Object.keys(e.Patterns).length,o=0,n=1/0;for(let a=0;a<i;a++){r(a),e.applyMask(a,t);let i=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),i<n&&(n=i,o=a)}return o}},37662:function(t,e,r){let i=r(64956),o=r(66579);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!i.isValid(e))throw Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw Error("Unknown mode: "+t)}}(t)}catch(t){return r}}},10894:function(t,e,r){let i=r(37662);function o(t){this.mode=i.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,r;for(e=0;e+3<=this.data.length;e+=3)r=parseInt(this.data.substr(e,3),10),t.put(r,10);let i=this.data.length-e;i>0&&(r=parseInt(this.data.substr(e),10),t.put(r,3*i+1))},t.exports=o},25153:function(t,e,r){let i=r(51309);e.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let n=0;n<e.length;n++)r[o+n]^=i.mul(t[o],e[n]);return r},e.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let t=r[0];for(let o=0;o<e.length;o++)r[o]^=i.mul(e[o],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},e.generateECPolynomial=function(t){let r=new Uint8Array([1]);for(let o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,i.exp(o)]));return r}},37621:function(t,e,r){let i=r(13400),o=r(9406),n=r(41904),a=r(21091),s=r(8177),l=r(78241),c=r(68334),u=r(37039),h=r(9936),d=r(48670),f=r(50237),p=r(37662),g=r(25082);function w(t,e,r){let i,o;let n=t.size,a=f.getEncodedBits(e,r);for(i=0;i<15;i++)o=(a>>i&1)==1,i<6?t.set(i,8,o,!0):i<8?t.set(i+1,8,o,!0):t.set(n-15+i,8,o,!0),i<8?t.set(8,n-i-1,o,!0):i<9?t.set(8,15-i-1+1,o,!0):t.set(8,15-i-1,o,!0);t.set(n-8,8,1,!0)}e.create=function(t,e){let r,f;if(void 0===t||""===t)throw Error("No input text");let b=o.M;return void 0!==e&&(b=o.from(e.errorCorrectionLevel,o.M),r=d.from(e.version),f=c.from(e.maskPattern),e.toSJISFunc&&i.setToSJISFunction(e.toSJISFunc)),function(t,e,r,o){let f;if(Array.isArray(t))f=g.fromArray(t);else if("string"==typeof t){let i=e;if(!i){let e=g.rawSplit(t);i=d.getBestVersionForData(e,r)}f=g.fromString(t,i||40)}else throw Error("Invalid data");let b=d.getBestVersionForData(f,r);if(!b)throw Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<b)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else e=b;let m=function(t,e,r){let o=new n;r.forEach(function(e){o.put(e.mode.bit,4),o.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(o)});let a=(i.getSymbolTotalCodewords(t)-u.getTotalCodewordsCount(t,e))*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let s=(a-o.getLengthInBits())/8;for(let t=0;t<s;t++)o.put(t%2?17:236,8);return function(t,e,r){let o,n;let a=i.getSymbolTotalCodewords(e),s=a-u.getTotalCodewordsCount(e,r),l=u.getBlocksCount(e,r),c=a%l,d=l-c,f=Math.floor(a/l),p=Math.floor(s/l),g=p+1,w=f-p,b=new h(w),m=0,v=Array(l),y=Array(l),x=0,C=new Uint8Array(t.buffer);for(let t=0;t<l;t++){let e=t<d?p:g;v[t]=C.slice(m,m+e),y[t]=b.encode(v[t]),m+=e,x=Math.max(x,e)}let E=new Uint8Array(a),_=0;for(o=0;o<x;o++)for(n=0;n<l;n++)o<v[n].length&&(E[_++]=v[n][o]);for(o=0;o<w;o++)for(n=0;n<l;n++)E[_++]=y[n][o];return E}(o,t,e)}(e,r,f),v=new a(i.getSymbolSize(e));return function(t,e){let r=t.size,i=l.getPositions(e);for(let e=0;e<i.length;e++){let o=i[e][0],n=i[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1)&&!(r<=o+e))for(let i=-1;i<=7;i++)n+i<=-1||r<=n+i||(e>=0&&e<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===e||6===e)||e>=2&&e<=4&&i>=2&&i<=4?t.set(o+e,n+i,!0,!0):t.set(o+e,n+i,!1,!0))}}(v,e),function(t){let e=t.size;for(let r=8;r<e-8;r++){let e=r%2==0;t.set(r,6,e,!0),t.set(6,r,e,!0)}}(v),function(t,e){let r=s.getPositions(e);for(let e=0;e<r.length;e++){let i=r[e][0],o=r[e][1];for(let e=-2;e<=2;e++)for(let r=-2;r<=2;r++)-2===e||2===e||-2===r||2===r||0===e&&0===r?t.set(i+e,o+r,!0,!0):t.set(i+e,o+r,!1,!0)}}(v,e),w(v,r,0),e>=7&&function(t,e){let r,i,o;let n=t.size,a=d.getEncodedBits(e);for(let e=0;e<18;e++)r=Math.floor(e/3),i=e%3+n-8-3,o=(a>>e&1)==1,t.set(r,i,o,!0),t.set(i,r,o,!0)}(v,e),function(t,e){let r=t.size,i=-1,o=r-1,n=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!t.isReserved(o,s-r)){let i=!1;a<e.length&&(i=(e[a]>>>n&1)==1),t.set(o,s-r,i),-1==--n&&(a++,n=7)}if((o+=i)<0||r<=o){o-=i,i=-i;break}}}(v,m),isNaN(o)&&(o=c.getBestMask(v,w.bind(null,v,r))),c.applyMask(o,v),w(v,r,o),{modules:v,version:e,errorCorrectionLevel:r,maskPattern:o,segments:f}}(t,r,b,f)}},9936:function(t,e,r){let i=r(25153);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=i.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=i.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let t=new Uint8Array(this.degree);return t.set(r,o),t}return r},t.exports=o},66579:function(t,e){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",o="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=RegExp(i,"g"),e.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=RegExp(o,"g"),e.NUMERIC=RegExp(r,"g"),e.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let n=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return n.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},25082:function(t,e,r){let i=r(37662),o=r(10894),n=r(77654),a=r(90690),s=r(69592),l=r(66579),c=r(13400),u=r(78343);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,r){let i;let o=[];for(;null!==(i=t.exec(r));)o.push({data:i[0],index:i.index,mode:e,length:i[0].length});return o}function f(t){let e,r;let o=d(l.NUMERIC,i.NUMERIC,t),n=d(l.ALPHANUMERIC,i.ALPHANUMERIC,t);return c.isKanjiModeEnabled()?(e=d(l.BYTE,i.BYTE,t),r=d(l.KANJI,i.KANJI,t)):(e=d(l.BYTE_KANJI,i.BYTE,t),r=[]),o.concat(n,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function p(t,e){switch(e){case i.NUMERIC:return o.getBitsLength(t);case i.ALPHANUMERIC:return n.getBitsLength(t);case i.KANJI:return s.getBitsLength(t);case i.BYTE:return a.getBitsLength(t)}}function g(t,e){let r;let l=i.getBestModeForData(t);if((r=i.from(e,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+t+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new o(t);case i.ALPHANUMERIC:return new n(t);case i.KANJI:return new s(t);case i.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t},[])},e.fromString=function(t,r){let o=function(t,e){let r={},o={start:{}},n=["start"];for(let a=0;a<t.length;a++){let s=t[a],l=[];for(let t=0;t<s.length;t++){let c=s[t],u=""+a+t;l.push(u),r[u]={node:c,lastCount:0},o[u]={};for(let t=0;t<n.length;t++){let a=n[t];r[a]&&r[a].node.mode===c.mode?(o[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),o[a][u]=p(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,e))}}n=l}for(let t=0;t<n.length;t++)o[n[t]].end=0;return{map:o,table:r}}(function(t){let e=[];for(let r=0;r<t.length;r++){let o=t[r];switch(o.mode){case i.NUMERIC:e.push([o,{data:o.data,mode:i.ALPHANUMERIC,length:o.length},{data:o.data,mode:i.BYTE,length:o.length}]);break;case i.ALPHANUMERIC:e.push([o,{data:o.data,mode:i.BYTE,length:o.length}]);break;case i.KANJI:e.push([o,{data:o.data,mode:i.BYTE,length:h(o.data)}]);break;case i.BYTE:e.push([{data:o.data,mode:i.BYTE,length:h(o.data)}])}}return e}(f(t,c.isKanjiModeEnabled())),r),n=u.find_path(o.map,"start","end"),a=[];for(let t=1;t<n.length-1;t++)a.push(o.table[n[t]].node);return e.fromArray(a.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?t[t.length-1].data+=e.data:t.push(e),t},[]))},e.rawSplit=function(t){return e.fromArray(f(t,c.isKanjiModeEnabled()))}},13400:function(t,e){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return i[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},64956:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},48670:function(t,e,r){let i=r(13400),o=r(37039),n=r(9406),a=r(37662),s=r(64956),l=i.getBCHDigit(7973);function c(t,e){return a.getCharCountIndicator(t,e)+4}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!s.isValid(t))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let n=(i.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e))*8;if(r===a.MIXED)return n;let l=n-c(r,t);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,r){let i;let o=n.from(r,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(let i=1;i<=40;i++)if(function(t,e){let r=0;return t.forEach(function(t){let i=c(t.mode,e);r+=i+t.getBitsLength()}),r}(t,i)<=e.getCapacity(i,r,a.MIXED))return i}(t,o);if(0===t.length)return 1;i=t[0]}else i=t;return function(t,r,i){for(let o=1;o<=40;o++)if(r<=e.getCapacity(o,i,t))return o}(i.mode,i.getLength(),o)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw Error("Invalid QR Code version");let e=t<<12;for(;i.getBCHDigit(e)-l>=0;)e^=7973<<i.getBCHDigit(e)-l;return t<<12|e}},46028:function(t,e,r){let i=r(10544);e.render=function(t,e,r){var o;let n=r,a=e;void 0!==n||e&&e.getContext||(n=e,e=void 0),e||(a=function(){try{return document.createElement("canvas")}catch(t){throw Error("You need to specify a canvas element")}}()),n=i.getOptions(n);let s=i.getImageWidth(t.modules.size,n),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,t,n),o=a,l.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",l.putImageData(c,0,0),a},e.renderToDataURL=function(t,r,i){let o=i;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});let n=e.render(t,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(a,s.quality)}},12330:function(t,e,r){let i=r(10544);function o(t,e){let r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function n(t,e,r){let i=t+e;return void 0!==r&&(i+=" "+r),i}e.render=function(t,e,r){let a=i.getOptions(e),s=t.modules.size,l=t.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,r){let i="",o=0,a=!1,s=0;for(let l=0;l<t.length;l++){let c=Math.floor(l%e),u=Math.floor(l/e);c||a||(a=!0),t[l]?(s++,l>0&&c>0&&t[l-1]||(i+=a?n("M",c+r,.5+u+r):n("m",o,0),o=0,a=!1),c+1<e&&t[l+1]||(i+=n("h",s),s=0)):o++}return i}(l,s,a.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+h+"</svg>\n";return"function"==typeof r&&r(null,d),d}},10544:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw Error("Invalid hex color: "+t);(3===e.length||4===e.length)&&(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");let r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,i=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:i,scale:i?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){let i=e.getScale(t,r);return Math.floor((t+2*r.margin)*i)},e.qrToImageData=function(t,r,i){let o=r.modules.size,n=r.modules.data,a=e.getScale(o,i),s=Math.floor((o+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let e=0;e<s;e++)for(let r=0;r<s;r++){let u=(e*s+r)*4,h=i.color.light;e>=l&&r>=l&&e<s-l&&r<s-l&&(h=c[n[Math.floor((e-l)/a)*o+Math.floor((r-l)/a)]?1:0]),t[u++]=h.r,t[u++]=h.g,t[u++]=h.b,t[u]=h.a}}},34470:function(t){"use strict";t.exports=(t,e)=>{if(!("string"==typeof t&&"string"==typeof e))throw TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];let r=t.indexOf(e);return -1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},67116:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},44519:function(t,e,r){"use strict";r.d(e,{E:function(){return a}});var i=r(74548),o=r(20239),n=r(6537);i.extend(n),i.extend(o),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(t=new Date().toISOString())=>i(t).year(),getRelativeDateFromNow:t=>i(t).fromNow(!0)}},51250:function(t,e,r){"use strict";r.d(e,{AccountController:function(){return l},ApiController:function(){return $},WM:function(){return g},fz:function(){return q},Lr:function(){return U},ConnectionController:function(){return W},ConnectorController:function(){return b},bq:function(){return n},j1:function(){return a},Xs:function(){return O},IN:function(){return N},NetworkController:function(){return x},OptionsController:function(){return E},Ie:function(){return v},RouterController:function(){return T},yD:function(){return F},SnackController:function(){return M},MO:function(){return f},ThemeController:function(){return V},sl:function(){return j}});var i=r(53722);function o(t,e,r,o){let n=t[e];return(0,i.Ld)(t,()=>{let i=t[e];Object.is(n,i)||r(n=i)},o)}Symbol();let n={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},a={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let t=navigator.userAgent.toLowerCase();return a.isMobile()&&t.includes("android")},isIos(){let t=navigator.userAgent.toLowerCase();return a.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:t=>!t||t-Date.now()<=n.TEN_SEC_MS,isAllowedRetry:t=>Date.now()-t>=n.ONE_SEC_MS,copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry:()=>Date.now()+n.FOUR_MINUTES_MS,getPlainAddress:t=>t.split(":")[2],wait:async t=>new Promise(e=>{setTimeout(e,t)}),debounce(t,e=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){t(...i)},e)}},isHttpUrl:t=>t.startsWith("http://")||t.startsWith("https://"),formatNativeUrl(t,e){if(a.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!a.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(t,e){window.open(t,e,"noreferrer noopener")},preloadImage:async t=>Promise.race([new Promise((e,r)=>{let i=new Image;i.onload=e,i.onerror=r,i.crossOrigin="anonymous",i.src=t}),a.wait(2e3)]),formatBalance(t,e){let r;if("0"===t)r="0.000";else if("string"==typeof t){let e=Number(t);e&&(r=e.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${e}`:"0.000"},isRestrictedRegion(){try{let{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return n.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl:()=>a.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>a.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>a.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},s=(0,i.sj)({isConnected:!1}),l={state:s,subscribe:t=>(0,i.Ld)(s,()=>t(s)),subscribeKey:(t,e)=>o(s,t,e),setIsConnected(t){s.isConnected=t},setCaipAddress(t){s.caipAddress=t,s.address=t?a.getPlainAddress(t):void 0},setBalance(t,e){s.balance=t,s.balanceSymbol=e},setProfileName(t){s.profileName=t},setProfileImage(t){s.profileImage=t},setAddressExplorerUrl(t){s.addressExplorerUrl=t},resetAccount(){s.isConnected=!1,s.caipAddress=void 0,s.address=void 0,s.balance=void 0,s.balanceSymbol=void 0,s.profileName=void 0,s.profileImage=void 0,s.addressExplorerUrl=void 0}};class c{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...e}){let r=this.createUrl(e);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...e}){let r=this.createUrl(e);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:e,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:e,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:e,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:e,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:e,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:e,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:e}){let r=new URL(t,this.baseUrl);return e&&Object.entries(e).forEach(([t,e])=>{e&&r.searchParams.append(t,e)}),r}}let u="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",d="@w3m/connected_wallet_image_url",f={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(u,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(u);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(u)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let e=f.getRecentWallets();e.find(e=>e.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(h,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(h);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(d,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(d)}catch{console.info("Unable to set Connected Wallet Image Url")}}},p=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),g={state:p,subscribeNetworkImages:t=>(0,i.Ld)(p.networkImages,()=>t(p.networkImages)),subscribeKey:(t,e)=>o(p,t,e),setWalletImage(t,e){p.walletImages[t]=e},setNetworkImage(t,e){p.networkImages[t]=e},setConnectorImage(t,e){p.connectorImages[t]=e},setTokenImage(t,e){p.tokenImages[t]=e}},w=(0,i.sj)({connectors:[]}),b={state:w,subscribeKey:(t,e)=>o(w,t,e),setConnectors(t){w.connectors=t.map(t=>(0,i.iH)(t))},addConnector(t){w.connectors.push((0,i.iH)(t))},getConnectors:()=>w.connectors},m=(0,i.sj)({open:!1,selectedNetworkId:void 0}),v={state:m,subscribe:t=>(0,i.Ld)(m,()=>t(m)),set(t){Object.assign(m,{...m,...t})}},y=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),x={state:y,subscribeKey:(t,e)=>o(y,t,e),_getClient(){if(!y._client)throw Error("NetworkController client not set");return y._client},setClient(t){y._client=(0,i.iH)(t)},setCaipNetwork(t){y.caipNetwork=t,v.set({selectedNetworkId:t?.id})},setDefaultCaipNetwork(t){y.caipNetwork=t,v.set({selectedNetworkId:t?.id}),y.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){y.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){let t=await this._getClient().getApprovedCaipNetworksData();y.supportsAllNetworks=t.supportsAllNetworks,y.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),y.caipNetwork=t},resetNetwork(){y.isDefaultCaipNetwork||(y.caipNetwork=void 0),y.approvedCaipNetworkIds=void 0,y.supportsAllNetworks=!0}},C=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),E={state:C,subscribeKey:(t,e)=>o(C,t,e),setProjectId(t){C.projectId=t},setIncludeWalletIds(t){C.includeWalletIds=t},setExcludeWalletIds(t){C.excludeWalletIds=t},setFeaturedWalletIds(t){C.featuredWalletIds=t},setTokens(t){C.tokens=t},setTermsConditionsUrl(t){C.termsConditionsUrl=t},setPrivacyPolicyUrl(t){C.privacyPolicyUrl=t},setCustomWallets(t){C.customWallets=t},setEnableAnalytics(t){C.enableAnalytics=t},setSdkVersion(t){C.sdkVersion=t},setMetadata(t){C.metadata=t}},_=new c({baseUrl:a.getApiUrl()}),D=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),$={state:D,subscribeKey:(t,e)=>o(D,t,e),_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:r}=E.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _fetchWalletImage(t){let e=`${_.baseUrl}/getWalletImage/${t}`,r=await _.getBlob({path:e,headers:$._getApiHeaders()});g.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){let e=`${_.baseUrl}/public/getAssetImage/${t}`,r=await _.getBlob({path:e,headers:$._getApiHeaders()});g.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){let e=`${_.baseUrl}/public/getAssetImage/${t}`,r=await _.getBlob({path:e,headers:$._getApiHeaders()});g.setConnectorImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:t}=x.state,e=t?.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>$._fetchNetworkImage(t)))},async fetchConnectorImages(){let{connectors:t}=b.state,e=t.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>$._fetchConnectorImage(t)))},async fetchFeaturedWallets(){let{featuredWalletIds:t}=E.state;if(t?.length){let{data:e}=await _.get({path:"/getWallets",headers:$._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):"4",include:t?.join(",")}});e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id));let r=e.map(t=>t.image_id).filter(Boolean);await Promise.allSettled(r.map(t=>$._fetchWalletImage(t))),D.featured=e}},async fetchRecommendedWallets(){let{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=E.state,i=[...e??[],...r??[]].filter(Boolean),{data:o,count:n}=await _.get({path:"/getWallets",headers:$._getApiHeaders(),params:{page:"1",entries:"4",include:t?.join(","),exclude:i?.join(",")}}),a=f.getRecentWallets(),s=o.map(t=>t.image_id).filter(Boolean),l=a.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(t=>$._fetchWalletImage(t))),D.recommended=o,D.count=n??0},async fetchWallets({page:t}){let{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=E.state,o=[...D.recommended.map(({id:t})=>t),...r??[],...i??[]].filter(Boolean),{data:n,count:s}=await _.get({path:"/getWallets",headers:$._getApiHeaders(),params:{page:String(t),entries:"40",include:e?.join(","),exclude:o.join(",")}}),l=n.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...l.map(t=>$._fetchWalletImage(t)),a.wait(300)]),D.wallets=[...D.wallets,...n],D.count=s>D.count?s:D.count,D.page=t},async searchWallet({search:t}){let{includeWalletIds:e,excludeWalletIds:r}=E.state;D.search=[];let{data:i}=await _.get({path:"/getWallets",headers:$._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e?.join(","),exclude:r?.join(",")}}),o=i.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...o.map(t=>$._fetchWalletImage(t)),a.wait(300)]),D.search=i},prefetch(){D.prefetchPromise=Promise.race([Promise.allSettled([$.fetchFeaturedWallets(),$.fetchRecommendedWallets(),$.fetchNetworkImages(),$.fetchConnectorImages()]),a.wait(3e3)])}},k=new c({baseUrl:a.getAnalyticsUrl()}),A=["MODAL_CREATED"],S=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),O={state:S,subscribe:t=>(0,i.Ld)(S,()=>t(S)),_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:r}=E.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _sendAnalyticsEvent(t){try{if(A.includes(t.data.event)||"undefined"==typeof window)return;await k.post({path:"/e",headers:O._getApiHeaders(),body:{eventId:a.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){S.timestamp=Date.now(),S.data=t,E.state.enableAnalytics&&O._sendAnalyticsEvent(S)}},I=(0,i.sj)({view:"Connect",history:["Connect"]}),T={state:I,subscribeKey:(t,e)=>o(I,t,e),push(t,e){t!==I.view&&(I.view=t,I.history.push(t),I.data=e)},reset(t){I.view=t,I.history=[t]},replace(t){I.history.length>1&&I.history.at(-1)!==t&&(I.view=t,I.history[I.history.length-1]=t)},goBack(){if(I.history.length>1){I.history.pop();let[t]=I.history.slice(-1);t&&(I.view=t)}}},R=(0,i.sj)({open:!1}),N={state:R,subscribeKey:(t,e)=>o(R,t,e),async open(t){await $.state.prefetchPromise,t?.view?T.reset(t.view):l.state.isConnected?T.reset("Account"):T.reset("Connect"),R.open=!0,v.set({open:!0}),O.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){R.open=!1,v.set({open:!1}),O.sendEvent({type:"track",event:"MODAL_CLOSE"})}},P=new c({baseUrl:a.getBlockchainApiUrl()}),U={fetchIdentity:({caipChainId:t,address:e})=>P.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:E.state.projectId}}),fetchTransactions:({account:t,projectId:e,cursor:r})=>P.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r?{cursor:r}:{}})},B=(0,i.sj)({message:"",variant:"success",open:!1}),M={state:B,subscribeKey:(t,e)=>o(B,t,e),showSuccess(t){B.message=t,B.variant="success",B.open=!0},showError(t){B.message=t,B.variant="error",B.open=!0},hide(){B.open=!1}},L=(0,i.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),j={state:L,subscribe:t=>(0,i.Ld)(L,()=>t(L)),async fetchTransactions(t){let{projectId:e}=E.state;if(!e||!t)throw Error("Transactions can't be fetched without a projectId and an accountAddress");L.loading=!0;try{let r=await U.fetchTransactions({account:t,projectId:e,cursor:L.next}),i=this.filterSpamTransactions(r.data),o=[...L.transactions,...i];L.loading=!1,L.transactions=o,L.transactionsByYear=this.groupTransactionsByYear(L.transactionsByYear,i),L.empty=0===o.length,L.next=r.next?r.next:void 0}catch(r){O.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:L.next}}),M.showError("Failed to fetch transactions"),L.loading=!1,L.empty=!0}},groupTransactionsByYear:(t={},e=[])=>(e.forEach(e=>{let r=new Date(e.metadata.minedAt).getFullYear();t[r]||(t[r]=[]),t[r]?.push(e)}),t),filterSpamTransactions:t=>t.filter(t=>!t.transfers.every(t=>t.nft_info?.flags.is_spam===!0)),resetTransactions(){L.transactions=[],L.transactionsByYear={},L.loading=!1,L.empty=!1,L.next=void 0}},z=(0,i.sj)({wcError:!1,buffering:!1}),W={state:z,subscribeKey:(t,e)=>o(z,t,e),_getClient(){if(!z._client)throw Error("ConnectionController client not set");return z._client},setClient(t){z._client=(0,i.iH)(t)},connectWalletConnect(){z.wcPromise=this._getClient().connectWalletConnect(t=>{z.wcUri=t,z.wcPairingExpiry=a.getPairingExpiry()})},async connectExternal(t){await this._getClient().connectExternal?.(t)},checkInstalled(t){return this._getClient().checkInstalled?.(t)},resetWcConnection(){z.wcUri=void 0,z.wcPairingExpiry=void 0,z.wcPromise=void 0,z.wcLinking=void 0,z.recentWallet=void 0,j.resetTransactions(),f.deleteWalletConnectDeepLink()},setWcLinking(t){z.wcLinking=t},setWcError(t){z.wcError=t,z.buffering=!1},setRecentWallet(t){z.recentWallet=t},setBuffering(t){z.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},H=(0,i.sj)({status:"uninitialized"}),F={state:H,subscribeKey:(t,e)=>o(H,t,e),subscribe:t=>(0,i.Ld)(H,()=>t(H)),_getClient(){if(!H._client)throw Error("SIWEController client not set");return H._client},setSIWEClient(t){H._client=(0,i.iH)(t),H.status="ready"},setNonce(t){H.nonce=t},setStatus(t){H.status=t},setMessage(t){H.message=t},setSession(t){H.session=t}},Z=(0,i.sj)({themeMode:"dark",themeVariables:{}}),V={state:Z,subscribe:t=>(0,i.Ld)(Z,()=>t(Z)),setThemeMode(t){Z.themeMode=t},setThemeVariables(t){Z.themeVariables={...Z.themeVariables,...t}}},q={getWalletImage:t=>t?.image_url?t?.image_url:t?.image_id?g.state.walletImages[t.image_id]:void 0,getNetworkImage:t=>t?.imageUrl?t?.imageUrl:t?.imageId?g.state.networkImages[t.imageId]:void 0,getConnectorImage:t=>t?.imageUrl?t.imageUrl:t?.imageId?g.state.connectorImages[t.imageId]:void 0}},9448:function(t,e,r){"use strict";r.r(e),r.d(e,{W3mModal:function(){return u}});var i=r(51250),o=r(56511),n=r(69307),a=r(92468),s=n.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let c="scroll-lock",u=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",t=>t?this.onOpen():this.onClose())),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?n.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&i.IN.close()}initializeTheming(){let{themeVariables:t,themeMode:e}=i.ThemeController.state,r=o.UiHelperUtil.getColorTheme(e);(0,o.initializeTheming)(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let t=document.createElement("style");t.dataset.w3m=c,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){let t=document.head.querySelector(`style[data-w3m="${c}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",e=>{if("Escape"===e.key)i.IN.close();else if("Tab"===e.key){let{tagName:r}=e.target;!r||r.includes("W3M-")||r.includes("WUI-")||t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),u=l([(0,o.customElement)("w3m-modal")],u)},85055:function(t,e,r){"use strict";r.d(e,{fl:function(){return $},iv:function(){return c},Ts:function(){return E},Qu:function(){return _}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(o&&void 0===t){let r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}}let l=t=>new s("string"==typeof t?t:t+"",void 0,n),c=(t,...e)=>new s(1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,n),u=(t,e)=>{if(o)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let r of e){let e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=r.cssText,t.appendChild(e)}},h=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return l(e)})(t):t,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:b}=Object,m=globalThis,v=m.trustedTypes,y=v?v.emptyScript:"",x=m.reactiveElementPolyfillSupport,C=(t,e)=>t,E={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_=(t,e)=>!d(t,e),D={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&f(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??D}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let t=this.properties;for(let e of[...g(t),...w(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,r]of e)this.elementProperties.set(t,r)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let r of new Set(t.flat(1/0).reverse()))e.unshift(h(r));else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){let r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:E;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,o){if(void 0!==t){if(!((r??=this.constructor.getPropertyOptions(t)).hasChanged??_)(i?o:this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[C("elementProperties")]=new Map,$[C("finalized")]=new Map,x?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.0.2")},57173:function(t,e,r){"use strict";r.d(e,{Jb:function(){return D},Ld:function(){return $},dy:function(){return _},sY:function(){return z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,o=i.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,h=()=>u.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=Array.isArray,p=t=>f(t)||"function"==typeof t?.[Symbol.iterator],g="[ 	\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,m=/>/g,v=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),_=E(1),D=(E(2),Symbol.for("lit-noChange")),$=Symbol.for("lit-nothing"),k=new WeakMap,A=u.createTreeWalker(u,129);function S(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(e):e}let O=(t,e)=>{let r=t.length-1,i=[],o,n=2===e?"<svg>":"",l=w;for(let e=0;e<r;e++){let r=t[e],u,h,d=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(h=l.exec(r)));)f=l.lastIndex,l===w?"!--"===h[1]?l=b:void 0!==h[1]?l=m:void 0!==h[2]?(C.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=v):void 0!==h[3]&&(l=v):l===v?">"===h[0]?(l=o??w,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=void 0===h[3]?v:'"'===h[3]?x:y):l===x||l===y?l=v:l===b||l===m?l=w:(l=v,o=void 0);let p=l===v&&t[e+1].startsWith("/>")?" ":"";n+=l===w?r+c:d>=0?(i.push(u),r.slice(0,d)+a+r.slice(d)+s+p):r+s+(-2===d?e:p)}return[S(t,n+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class I{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,c=0,u=t.length-1,d=this.parts,[f,p]=O(t,e);if(this.el=I.createElement(f,r),A.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=A.nextNode())&&d.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(a)){let e=p[c++],r=i.getAttribute(t).split(s),o=/([.?@])?(.*)/.exec(e);d.push({type:1,index:n,name:o[2],strings:r,ctor:"."===o[1]?U:"?"===o[1]?B:"@"===o[1]?M:P}),i.removeAttribute(t)}else t.startsWith(s)&&(d.push({type:6,index:n}),i.removeAttribute(t));if(C.test(i.tagName)){let t=i.textContent.split(s),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],h()),A.nextNode(),d.push({type:2,index:++n});i.append(t[e],h())}}}else if(8===i.nodeType){if(i.data===l)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(s,t+1));)d.push({type:7,index:n}),t+=s.length-1}}n++}}static createElement(t,e){let r=u.createElement("template");return r.innerHTML=t,r}}function T(t,e,r=t,i){if(e===D)return e;let o=void 0!==i?r._$Co?.[i]:r._$Cl,n=d(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t))._$AT(t,r,i),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(e=T(t,o._$AS(t,e.values),o,i)),e}class R{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??u).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let e;2===s.type?e=new N(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new L(o,this,t)),this._$AV.push(e),s=r[++a]}n!==s?.index&&(o=A.nextNode(),n++)}return A.currentNode=u,i}p(t){let e=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){d(t=T(this,t,e))?t===$||null==t||""===t?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):p(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=I.createElement(S(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new R(i,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new I(t)),e}T(t){f(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new N(this.k(h()),this.k(h()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class P{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(void 0===o)(n=!d(t=T(this,t,e,0))||t!==this._$AH&&t!==D)&&(this._$AH=t);else{let i,a;let s=t;for(t=o[0],i=0;i<o.length-1;i++)(a=T(this,s[r+i],e,i))===D&&(a=this._$AH[i]),n||=!d(a)||a!==this._$AH[i],a===$?t=$:t!==$&&(t+=(a??"")+o[i+1]),this._$AH[i]=a}n&&!i&&this.O(t)}O(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class U extends P{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===$?void 0:t}}class B extends P{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class M extends P{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??$)===D)return;let r=this._$AH,i=t===$&&r!==$||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==$&&(r===$||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}let j=i.litHtmlPolyfillSupport;j?.(I,N),(i.litHtmlVersions??=[]).push("3.1.0");let z=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(void 0===o){let t=r?.renderBefore??null;i._$litPart$=o=new N(e.insertBefore(h(),t),t,void 0,r??{})}return o._$AI(t),o}},92468:function(t,e,r){"use strict";r.d(e,{Cb:function(){return a},SB:function(){return s}});var i=r(85055);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},n=(t=o,e,r)=>{let{kind:i,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,t),"accessor"===i){let{name:i}=r;return{set(r){let o=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){let{name:i}=r;return function(r){let o=this[i];e.call(this,r),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function a(t){return(e,r)=>"object"==typeof r?n(t,e,r):((t,e,r)=>{let i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(t){return a({...t,state:!0,attribute:!1})}},69307:function(t,e,r){"use strict";r.d(e,{oi:function(){return n},iv:function(){return i.iv},dy:function(){return o.dy}});var i=r(85055),o=r(57173);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,o.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return o.Jb}}n._$litElement$=!0,n.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:n});let a=globalThis.litElementPolyfillSupport;a?.({LitElement:n}),(globalThis.litElementVersions??=[]).push("4.0.2")},56511:function(t,e,r){"use strict";let i,o,n;r.r(e),r.d(e,{TransactionUtil:function(){return iQ},UiHelperUtil:function(){return eK},WuiAccountButton:function(){return e6},WuiAllWalletsImage:function(){return rr},WuiAvatar:function(){return e0},WuiButton:function(){return rn},WuiCard:function(){return tS},WuiCardSelect:function(){return rw},WuiCardSelectLoader:function(){return rc},WuiChip:function(){return rv},WuiConnectButton:function(){return rC},WuiCtaButton:function(){return rD},WuiEmailInput:function(){return rF},WuiFlex:function(){return eX},WuiGrid:function(){return iV},WuiIcon:function(){return eC},WuiIconBox:function(){return e3},WuiIconLink:function(){return rq},WuiImage:function(){return eD},WuiInputElement:function(){return rG},WuiInputNumeric:function(){return rQ},WuiInputText:function(){return rz},WuiLink:function(){return r2},WuiListItem:function(){return r4},WuiListWallet:function(){return iu},WuiLoadingHexagon:function(){return ek},WuiLoadingSpinner:function(){return eO},WuiLoadingThumbnail:function(){return eR},WuiLogo:function(){return ip},WuiLogoSelect:function(){return ib},WuiNetworkButton:function(){return iy},WuiNetworkImage:function(){return rf},WuiOtp:function(){return iE},WuiQrCode:function(){return iS},WuiSearchBar:function(){return iI},WuiSeparator:function(){return iY},WuiShimmer:function(){return eU},WuiSnackbar:function(){return iN},WuiTabs:function(){return iB},WuiTag:function(){return is},WuiText:function(){return eW},WuiTooltip:function(){return ij},WuiTransactionListItem:function(){return ie},WuiTransactionListItemLoader:function(){return ii},WuiTransactionVisual:function(){return r7},WuiVisual:function(){return eV},WuiVisualThumbnail:function(){return iH},WuiWalletImage:function(){return e9},customElement:function(){return tD},initializeTheming:function(){return tm},setColorTheme:function(){return tv},setThemeVariables:function(){return ty}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(t,e,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let r=void 0!==e&&1===e.length;r&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(e,t))}return t}toString(){return this.cssText}}let h=t=>new u("string"==typeof t?t:t+"",void 0,l),d=(t,...e)=>new u(1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,l),f=(t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let r of e){let e=document.createElement("style"),i=a.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=r.cssText,t.appendChild(e)}},p=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return h(e)})(t):t,{is:g,defineProperty:w,getOwnPropertyDescriptor:b,getOwnPropertyNames:m,getOwnPropertySymbols:v,getPrototypeOf:y}=Object,x=globalThis,C=x.trustedTypes,E=C?C.emptyScript:"",_=x.reactiveElementPolyfillSupport,D=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},k=(t,e)=>!g(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&w(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=b(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let t=this.properties;for(let e of[...m(t),...v(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,r]of e)this.elementProperties.set(t,r)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let r of new Set(t.flat(1/0).reverse()))e.unshift(p(r));else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){let r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:$).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,o){if(void 0!==t){if(!((r??=this.constructor.getPropertyOptions(t)).hasChanged??k)(i?o:this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[D("elementProperties")]=new Map,S[D("finalized")]=new Map,_?.({ReactiveElement:S}),(x.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=globalThis,I=O.trustedTypes,T=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,R="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,P="?"+N,U=`<${P}>`,B=document,M=()=>B.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,z=t=>j(t)||"function"==typeof t?.[Symbol.iterator],W="[ 	\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,Z=/>/g,V=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,K=/"/g,Y=/^(?:script|style|textarea|title)$/i,G=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),X=G(1),J=G(2),Q=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),te=new WeakMap,tr=B.createTreeWalker(B,129);function ti(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}let to=(t,e)=>{let r=t.length-1,i=[],o,n=2===e?"<svg>":"",a=H;for(let e=0;e<r;e++){let r=t[e],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===H?"!--"===l[1]?a=F:void 0!==l[1]?a=Z:void 0!==l[2]?(Y.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=V):void 0!==l[3]&&(a=V):a===V?">"===l[0]?(a=o??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?V:'"'===l[3]?K:q):a===K||a===q?a=V:a===F||a===Z?a=H:(a=V,o=void 0);let h=a===V&&t[e+1].startsWith("/>")?" ":"";n+=a===H?r+U:c>=0?(i.push(s),r.slice(0,c)+R+r.slice(c)+N+h):r+N+(-2===c?e:h)}return[ti(t,n+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class tn{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0,a=t.length-1,s=this.parts,[l,c]=to(t,e);if(this.el=tn.createElement(l,r),tr.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=tr.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(R)){let e=c[n++],r=i.getAttribute(t).split(N),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?tu:"?"===a[1]?th:"@"===a[1]?td:tc}),i.removeAttribute(t)}else t.startsWith(N)&&(s.push({type:6,index:o}),i.removeAttribute(t));if(Y.test(i.tagName)){let t=i.textContent.split(N),e=t.length-1;if(e>0){i.textContent=I?I.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],M()),tr.nextNode(),s.push({type:2,index:++o});i.append(t[e],M())}}}else if(8===i.nodeType){if(i.data===P)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(N,t+1));)s.push({type:7,index:o}),t+=N.length-1}}o++}}static createElement(t,e){let r=B.createElement("template");return r.innerHTML=t,r}}function ta(t,e,r=t,i){if(e===Q)return e;let o=void 0!==i?r._$Co?.[i]:r._$Cl,n=L(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t))._$AT(t,r,i),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(e=ta(t,o._$AS(t,e.values),o,i)),e}class ts{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??B).importNode(e,!0);tr.currentNode=i;let o=tr.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let e;2===s.type?e=new tl(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new tf(o,this,t)),this._$AV.push(e),s=r[++a]}n!==s?.index&&(o=tr.nextNode(),n++)}return tr.currentNode=B,i}p(t){let e=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){L(t=ta(this,t,e))?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):z(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tt&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(B.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=tn.createElement(ti(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new ts(i,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=te.get(t.strings);return void 0===e&&te.set(t.strings,e=new tn(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new tl(this.k(M()),this.k(M()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=tt}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(void 0===o)(n=!L(t=ta(this,t,e,0))||t!==this._$AH&&t!==Q)&&(this._$AH=t);else{let i,a;let s=t;for(t=o[0],i=0;i<o.length-1;i++)(a=ta(this,s[r+i],e,i))===Q&&(a=this._$AH[i]),n||=!L(a)||a!==this._$AH[i],a===tt?t=tt:t!==tt&&(t+=(a??"")+o[i+1]),this._$AH[i]=a}n&&!i&&this.O(t)}O(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tu extends tc{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===tt?void 0:t}}class th extends tc{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==tt)}}class td extends tc{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=ta(this,t,e,0)??tt)===Q)return;let r=this._$AH,i=t===tt&&r!==tt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==tt&&(r===tt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tf{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ta(this,t)}}let tp=O.litHtmlPolyfillSupport;tp?.(tn,tl),(O.litHtmlVersions??=[]).push("3.1.0");let tg=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(void 0===o){let t=r?.renderBefore??null;i._$litPart$=o=new tl(e.insertBefore(M(),t),t,void 0,r??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tw extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}tw._$litElement$=!0,tw.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tw});let tb=globalThis.litElementPolyfillSupport;function tm(t,e){i=document.createElement("style"),o=document.createElement("style"),n=document.createElement("style"),i.textContent=tx(t).core.cssText,o.textContent=tx(t).dark.cssText,n.textContent=tx(t).light.cssText,document.head.appendChild(i),document.head.appendChild(o),document.head.appendChild(n),tv(e)}function tv(t){o&&n&&("light"===t?(o.removeAttribute("media"),n.media="enabled"):(n.removeAttribute("media"),o.media="enabled"))}function ty(t){i&&o&&n&&(i.textContent=tx(t).core.cssText,o.textContent=tx(t).dark.cssText,n.textContent=tx(t).light.cssText)}function tx(t){return{core:d`
      :root {
        --w3m-color-mix-strength: ${h(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${h(t?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${h(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${h(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${h(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:d`
      :root {
        --w3m-color-mix: ${h(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${h(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:d`
      :root {
        --w3m-color-mix: ${h(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${h(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}tb?.({LitElement:tw}),(globalThis.litElementVersions??=[]).push("4.0.2");let tC=d`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,tE=d`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,t_=d`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function tD(t){return function(e){return"function"==typeof e?(customElements.get(t)||customElements.define(t,e),e):function(t,e){let{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){customElements.get(t)||customElements.define(t,e)}}}(t,e)}}var t$,tk,tA=d`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let tS=class extends tw{render(){return X`<slot></slot>`}};tS.styles=[tC,tA],tS=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([tD("wui-card")],tS);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tO={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:k},tI=(t=tO,e,r)=>{let{kind:i,metadata:o}=r,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,t),"accessor"===i){let{name:i}=r;return{set(r){let o=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){let{name:i}=r;return function(r){let o=this[i];e.call(this,r),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function tT(t){return(e,r)=>"object"==typeof r?tI(t,e,r):((t,e,r)=>{let i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tR(t){return tT({...t,state:!0,attribute:!1})}var tN=d`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let tP=J`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,tU=J`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,tB=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tM=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tL=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,tj=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tz=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,tW=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,tH=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,tF=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tZ=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,tV=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,tq=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tK=J`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,tY=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tG=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tX=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,tJ=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,tQ=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,t0=J` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,t1=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,t2=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,t3=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,t5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,t4=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,t6=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t8=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,t7=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t9=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,et=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ee=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,er=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,ei=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,eo=J`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,en=J`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ea=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,es=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,el=J` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ec=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eu=J`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,eh=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ed=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ef=J`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ep=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eg=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ew=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eb=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,em=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ev=J`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var ey=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ex={allWallets:tP,appStore:tU,chromeStore:tK,apple:tB,arrowBottom:tM,arrowLeft:tL,arrowRight:tj,arrowTop:tz,browser:tW,checkmark:tH,chevronBottom:tF,chevronLeft:tZ,chevronRight:tV,chevronTop:tq,clock:tY,close:tG,compass:tJ,coinPlaceholder:tX,copy:tQ,cursor:t0,desktop:t1,disconnect:t2,discord:t3,etherscan:t5,extension:t4,externalLink:t6,facebook:t8,filters:t7,github:t9,google:et,helpCircle:ee,infoCircle:er,mail:ei,mobile:eo,networkPlaceholder:en,nftPlaceholder:ea,off:es,playStore:el,qrCode:ec,refresh:eu,search:eh,swapHorizontal:ed,swapHorizontalBold:ef,swapVertical:ep,telegram:eg,twitch:ew,twitter:eb,twitterIcon:em,wallet:J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:J`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:ev,warningCircle:J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`},eC=class extends tw{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,X`${ex[this.name]}`}};eC.styles=[tC,t_,tN],ey([tT()],eC.prototype,"size",void 0),ey([tT()],eC.prototype,"name",void 0),ey([tT()],eC.prototype,"color",void 0),eC=ey([tD("wui-icon")],eC);var eE=d`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,e_=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eD=class extends tw{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return X`<img src=${this.src} alt=${this.alt} />`}};eD.styles=[tC,t_,eE],e_([tT()],eD.prototype,"src",void 0),e_([tT()],eD.prototype,"alt",void 0),eD=e_([tD("wui-image")],eD);var e$=d`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let ek=class extends tw{render(){return X`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ek.styles=[tC,e$],ek=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([tD("wui-loading-hexagon")],ek);var eA=d`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eS=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eO=class extends tw{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,X`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eO.styles=[tC,eA],eS([tT()],eO.prototype,"color",void 0),eS([tT()],eO.prototype,"size",void 0),eO=eS([tD("wui-loading-spinner")],eO);var eI=d`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eT=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eR=class extends tw{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let t=this.radius>50?50:this.radius,e=36-t;return X`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+e} ${245+e}"
          stroke-dashoffset=${360+1.75*e}
        />
      </svg>
    `}};eR.styles=[tC,eI],eT([tT({type:Number})],eR.prototype,"radius",void 0),eR=eT([tD("wui-loading-thumbnail")],eR);var eN=d`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,eP=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eU=class extends tw{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,X`<slot></slot>`}};eU.styles=[eN],eP([tT()],eU.prototype,"width",void 0),eP([tT()],eU.prototype,"height",void 0),eP([tT()],eU.prototype,"borderRadius",void 0),eU=eP([tD("wui-shimmer")],eU);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eB=t=>(...e)=>({_$litDirective$:t,values:e});class eM{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eL=eB(class extends eM{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(e)}let r=t.element.classList;for(let t of this.it)t in e||(r.remove(t),this.it.delete(t));for(let t in e){let i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return Q}});var ej=d`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,ez=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eW=class extends tw{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,X`<slot class=${eL(t)}></slot>`}};eW.styles=[tC,ej],ez([tT()],eW.prototype,"variant",void 0),ez([tT()],eW.prototype,"color",void 0),ez([tT()],eW.prototype,"align",void 0),eW=ez([tD("wui-text")],eW);var eH=d`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,eF=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eZ={browser:J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,dao:J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,defi:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,defiAlt:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eth:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,layers:J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,lock:J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,login:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,network:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,nft:J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,noun:J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,profile:J`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,system:J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `},eV=class extends tw{constructor(){super(...arguments),this.name="browser"}render(){return X`${eZ[this.name]}`}};eV.styles=[tC,eH],eF([tT()],eV.prototype,"name",void 0),eV=eF([tD("wui-visual")],eV);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eq=t=>t??tt,eK={getSpacingStyles:(t,e)=>Array.isArray(t)?t[e]?`var(--wui-spacing-${t[e]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName:t=>new URL(t).hostname,getTruncateString:({string:t,charsStart:e,charsEnd:r,truncate:i})=>t.length<=e+r?t:"end"===i?`${t.substring(0,e)}...`:"start"===i?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`,generateAvatarColors(t){let e=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(e),i=[];for(let t=0;t<5;t+=1){let e=this.tintColor(r,.15*t);i.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){let e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},tintColor(t,e){let[r,i,o]=t;return[Math.round(r+(255-r)*e),Math.round(i+(255-i)*e),Math.round(o+(255-o)*e)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var eY=d`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,eG=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let eX=class extends tw{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&eK.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&eK.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&eK.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&eK.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&eK.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&eK.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&eK.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&eK.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};eX.styles=[tC,eY],eG([tT()],eX.prototype,"flexDirection",void 0),eG([tT()],eX.prototype,"flexWrap",void 0),eG([tT()],eX.prototype,"flexBasis",void 0),eG([tT()],eX.prototype,"flexGrow",void 0),eG([tT()],eX.prototype,"flexShrink",void 0),eG([tT()],eX.prototype,"alignItems",void 0),eG([tT()],eX.prototype,"justifyContent",void 0),eG([tT()],eX.prototype,"columnGap",void 0),eG([tT()],eX.prototype,"rowGap",void 0),eG([tT()],eX.prototype,"gap",void 0),eG([tT()],eX.prototype,"padding",void 0),eG([tT()],eX.prototype,"margin",void 0),eX=eG([tD("wui-flex")],eX);var eJ=d`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,eQ=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let e0=class extends tw{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return X`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",X`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=eK.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};e0.styles=[tC,eJ],eQ([tT()],e0.prototype,"imageSrc",void 0),eQ([tT()],e0.prototype,"alt",void 0),eQ([tT()],e0.prototype,"address",void 0),e0=eQ([tD("wui-avatar")],e0);var e1=d`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,e2=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let e3=class extends tw{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t=this.iconSize||this.size,e="lg"===this.size,r="gray"===this.background,i="opaque"===this.background,o="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i,n=`var(--wui-color-${this.backgroundColor})`;return o?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(n=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${n};
       --local-bg-mix: ${o||r?"100%":e?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${e?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,X` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};e3.styles=[tC,tE,e1],e2([tT()],e3.prototype,"size",void 0),e2([tT()],e3.prototype,"backgroundColor",void 0),e2([tT()],e3.prototype,"iconColor",void 0),e2([tT()],e3.prototype,"iconSize",void 0),e2([tT()],e3.prototype,"background",void 0),e2([tT({type:Boolean})],e3.prototype,"border",void 0),e2([tT()],e3.prototype,"borderColor",void 0),e2([tT()],e3.prototype,"icon",void 0),e3=e2([tD("wui-icon-box")],e3);var e5=d`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,e4=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let e6=class extends tw{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${eq(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${eK.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let t=this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return X`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};e6.styles=[tC,tE,e5],e4([tT()],e6.prototype,"networkSrc",void 0),e4([tT()],e6.prototype,"avatarSrc",void 0),e4([tT()],e6.prototype,"balance",void 0),e4([tT({type:Boolean})],e6.prototype,"disabled",void 0),e4([tT({type:Boolean})],e6.prototype,"isProfileName",void 0),e4([tT()],e6.prototype,"address",void 0),e6=e4([tD("wui-account-button")],e6);var e8=d`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,e7=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let e9=class extends tw{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),X` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?X`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:X`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};e9.styles=[tC,e8],e7([tT()],e9.prototype,"size",void 0),e7([tT()],e9.prototype,"name",void 0),e7([tT()],e9.prototype,"imageSrc",void 0),e7([tT()],e9.prototype,"walletIcon",void 0),e9=e7([tD("wui-wallet-image")],e9);var rt=d`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,re=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rr=class extends tw{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<4;return X`${this.walletImages.slice(0,4).map(({src:t,walletName:e})=>X`
          <wui-wallet-image
            size="inherit"
            imageSrc=${t}
            name=${eq(e)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(4-this.walletImages.length)].map(()=>X` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};rr.styles=[tC,rt],re([tT({type:Array})],rr.prototype,"walletImages",void 0),rr=re([tD("wui-all-wallets-image")],rr);var ri=d`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,ro=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rn=class extends tw{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let t="md"===this.size?"paragraph-600":"small-600";return X`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}};rn.styles=[tC,tE,ri],ro([tT()],rn.prototype,"size",void 0),ro([tT({type:Boolean})],rn.prototype,"disabled",void 0),ro([tT({type:Boolean})],rn.prototype,"fullWidth",void 0),ro([tT({type:Boolean})],rn.prototype,"loading",void 0),ro([tT()],rn.prototype,"variant",void 0),rn=ro([tD("wui-button")],rn);let ra=J`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rs=d`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,rl=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rc=class extends tw{constructor(){super(...arguments),this.type="wallet"}render(){return X`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?X` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ra}`:X`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rc.styles=[tC,tE,rs],rl([tT()],rc.prototype,"type",void 0),rc=rl([tD("wui-card-select-loader")],rc);let ru=J`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var rh=d`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,rd=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rf=class extends tw{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let t="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,X`${this.templateVisual()} ${t?ru:ra}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rf.styles=[tC,rh],rd([tT()],rf.prototype,"size",void 0),rd([tT()],rf.prototype,"name",void 0),rd([tT()],rf.prototype,"imageSrc",void 0),rd([tT({type:Boolean})],rf.prototype,"selected",void 0),rf=rd([tD("wui-network-image")],rf);var rp=d`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,rg=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rw=class extends tw{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return X`
      <button data-selected=${eq(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?X`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${eq(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:X`
      <wui-wallet-image size="md" imageSrc=${eq(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};rw.styles=[tC,tE,rp],rg([tT()],rw.prototype,"name",void 0),rg([tT()],rw.prototype,"type",void 0),rg([tT()],rw.prototype,"imageSrc",void 0),rg([tT({type:Boolean})],rw.prototype,"disabled",void 0),rg([tT({type:Boolean})],rw.prototype,"selected",void 0),rw=rg([tD("wui-card-select")],rw);var rb=d`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,rm=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rv=class extends tw{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let t="transparent"===this.variant?"small-600":"paragraph-600";return X`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${eK.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}};rv.styles=[tC,tE,rb],rm([tT()],rv.prototype,"variant",void 0),rm([tT()],rv.prototype,"imageSrc",void 0),rm([tT({type:Boolean})],rv.prototype,"disabled",void 0),rm([tT()],rv.prototype,"icon",void 0),rm([tT()],rv.prototype,"href",void 0),rv=rm([tD("wui-chip")],rv);var ry=d`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,rx=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rC=class extends tw{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let t="md"===this.size?"paragraph-600":"small-600";return X`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rC.styles=[tC,tE,ry],rx([tT()],rC.prototype,"size",void 0),rx([tT({type:Boolean})],rC.prototype,"loading",void 0),rC=rx([tD("wui-connect-button")],rC);var rE=d`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,r_=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rD=class extends tw{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return X`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rD.styles=[tC,tE,rE],r_([tT({type:Boolean})],rD.prototype,"disabled",void 0),r_([tT()],rD.prototype,"label",void 0),r_([tT()],rD.prototype,"buttonLabel",void 0),rD=r_([tD("wui-cta-button")],rD);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:r$}={j:R,P:N,A:P,C:1,M:to,L:ts,R:z,V:ta,D:tl,I:tc,H:th,N:td,U:tu,B:tf},rk=t=>void 0===t.strings,rA=(t,e)=>{let r=t._$AN;if(void 0===r)return!1;for(let t of r)t._$AO?.(e,!1),rA(t,e);return!0},rS=t=>{let e,r;do{if(void 0===(e=t._$AM))break;(r=e._$AN).delete(t),t=e}while(0===r?.size)},rO=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),rR(e)}};function rI(t){void 0!==this._$AN?(rS(this),this._$AM=t,rO(this)):this._$AM=t}function rT(t,e=!1,r=0){let i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(e){if(Array.isArray(i))for(let t=r;t<i.length;t++)rA(i[t],!1),rS(i[t]);else null!=i&&(rA(i,!1),rS(i))}else rA(this,t)}}let rR=t=>{2==t.type&&(t._$AP??=rT,t._$AQ??=rI)};class rN extends eM{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),rO(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(rA(this,t),rS(this))}setValue(t){if(rk(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rP=()=>new rU;class rU{}let rB=new WeakMap,rM=eB(class extends rN{render(t){return tt}update(t,[e]){let r=e!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),tt}ot(t){if("function"==typeof this.G){let e=this.ct??globalThis,r=rB.get(e);void 0===r&&(r=new WeakMap,rB.set(e,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?rB.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var rL=d`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,rj=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rz=class extends tw{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=rP()}render(){let t=`wui-size-${this.size}`;return X` ${this.templateIcon()}
      <input
        ${rM(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${eq(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?X`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rz.styles=[tC,tE,rL],rj([tT()],rz.prototype,"size",void 0),rj([tT()],rz.prototype,"icon",void 0),rj([tT({type:Boolean})],rz.prototype,"disabled",void 0),rj([tT()],rz.prototype,"placeholder",void 0),rj([tT()],rz.prototype,"type",void 0),rj([tT()],rz.prototype,"keyHint",void 0),rz=rj([tD("wui-input-text")],rz);var rW=d`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,rH=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rF=class extends tw{render(){return X`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rF.styles=[tC,rW],rH([tT()],rF.prototype,"errorMessage",void 0),rF=rH([tD("wui-email-input")],rF);var rZ=d`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,rV=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rq=class extends tw{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rq.styles=[tC,tE,t_,rZ],rV([tT()],rq.prototype,"size",void 0),rV([tT({type:Boolean})],rq.prototype,"disabled",void 0),rV([tT()],rq.prototype,"icon",void 0),rV([tT()],rq.prototype,"iconColor",void 0),rq=rV([tD("wui-icon-link")],rq);var rK=d`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,rY=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rG=class extends tw{constructor(){super(...arguments),this.icon="copy"}render(){return X`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rG.styles=[tC,tE,rK],rY([tT()],rG.prototype,"icon",void 0),rG=rY([tD("wui-input-element")],rG);var rX=d`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,rJ=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let rQ=class extends tw{constructor(){super(...arguments),this.disabled=!1}render(){return X`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};rQ.styles=[tC,tE,rX],rJ([tT({type:Boolean})],rQ.prototype,"disabled",void 0),rQ=rJ([tD("wui-input-numeric")],rQ);var r0=d`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,r1=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let r2=class extends tw{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};r2.styles=[tC,tE,r0],r1([tT({type:Boolean})],r2.prototype,"disabled",void 0),r1([tT()],r2.prototype,"color",void 0),r2=r1([tD("wui-link")],r2);var r3=d`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,r5=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let r4=class extends tw{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return X`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${eq(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return X`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return X`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:e;return X`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}chevronTemplate(){return this.chevron?X`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};r4.styles=[tC,tE,r3],r5([tT()],r4.prototype,"icon",void 0),r5([tT()],r4.prototype,"iconSize",void 0),r5([tT()],r4.prototype,"variant",void 0),r5([tT()],r4.prototype,"iconVariant",void 0),r5([tT({type:Boolean})],r4.prototype,"disabled",void 0),r5([tT()],r4.prototype,"imageSrc",void 0),r5([tT()],r4.prototype,"alt",void 0),r5([tT({type:Boolean})],r4.prototype,"chevron",void 0),r5([tT({type:Boolean})],r4.prototype,"loading",void 0),r4=r5([tD("wui-list-item")],r4),(t$=tk||(tk={})).approve="approved",t$.bought="bought",t$.borrow="borrowed",t$.burn="burnt",t$.cancel="canceled",t$.claim="claimed",t$.deploy="deployed",t$.deposit="deposited",t$.execute="executed",t$.mint="minted",t$.receive="received",t$.repay="repaid",t$.send="sent",t$.sell="sold",t$.stake="staked",t$.trade="swapped",t$.unstake="unstaked",t$.withdraw="withdrawn";var r6=d`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,r8=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let r7=class extends tw{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[t,e]=this.images,r=t?.type==="NFT",i=e?.url?"NFT"===e.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,X`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[t,e]=this.images,r=t?.type;return 2===this.images.length&&(t?.url||e?.url)?X`<div class="swap-images-container">
        ${t?.url?X`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?X`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?X`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===r?X`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:X`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return(t=this.getIcon(),this.status&&(e=this.getStatusColor()),t)?X`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};r7.styles=[r6],r8([tT()],r7.prototype,"type",void 0),r8([tT()],r7.prototype,"status",void 0),r8([tT()],r7.prototype,"direction",void 0),r8([tT()],r7.prototype,"onlyDirectionIcon",void 0),r8([tT()],r7.prototype,"images",void 0),r8([tT()],r7.prototype,"secondImage",void 0),r7=r8([tD("wui-transaction-visual")],r7);var r9=d`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,it=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ie=class extends tw{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return X`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${tk[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let t=this.descriptions?.[0];return t?X`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){let t=this.descriptions?.[1];return t?X`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};ie.styles=[tC,r9],it([tT()],ie.prototype,"type",void 0),it([tT()],ie.prototype,"descriptions",void 0),it([tT()],ie.prototype,"date",void 0),it([tT()],ie.prototype,"onlyDirectionIcon",void 0),it([tT()],ie.prototype,"status",void 0),it([tT()],ie.prototype,"direction",void 0),it([tT()],ie.prototype,"images",void 0),ie=it([tD("wui-transaction-list-item")],ie);var ir=d`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let ii=class extends tw{render(){return X`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ii.styles=[tC,ir],ii=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([tD("wui-transaction-list-item-loader")],ii);var io=d`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,ia=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let is=class extends tw{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,X`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};is.styles=[tC,io],ia([tT()],is.prototype,"variant",void 0),is=ia([tD("wui-tag")],is);var il=d`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,ic=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iu=class extends tw{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?X` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?X` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?X`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:X`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?X`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?X`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};iu.styles=[tC,tE,il],ic([tT({type:Array})],iu.prototype,"walletImages",void 0),ic([tT()],iu.prototype,"imageSrc",void 0),ic([tT()],iu.prototype,"name",void 0),ic([tT()],iu.prototype,"tagLabel",void 0),ic([tT()],iu.prototype,"tagVariant",void 0),ic([tT()],iu.prototype,"icon",void 0),ic([tT()],iu.prototype,"walletIcon",void 0),ic([tT({type:Boolean})],iu.prototype,"disabled",void 0),ic([tT({type:Boolean})],iu.prototype,"showAllWallets",void 0),iu=ic([tD("wui-list-wallet")],iu);var ih=d`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,id=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ip=class extends tw{constructor(){super(...arguments),this.logo="google"}render(){return X`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ip.styles=[tC,ih],id([tT()],ip.prototype,"logo",void 0),ip=id([tD("wui-logo")],ip);var ig=d`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,iw=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ib=class extends tw{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ib.styles=[tC,tE,ig],iw([tT()],ib.prototype,"logo",void 0),iw([tT({type:Boolean})],ib.prototype,"disabled",void 0),ib=iw([tD("wui-logo-select")],ib);var im=d`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,iv=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iy=class extends tw{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};iy.styles=[tC,tE,im],iv([tT()],iy.prototype,"imageSrc",void 0),iv([tT({type:Boolean})],iy.prototype,"disabled",void 0),iy=iv([tD("wui-network-button")],iy);var ix=d`
  :host {
    position: relative;
    display: block;
  }
`,iC=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iE=class extends tw{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,e)=>{let r=t.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let o=i.selectionStart;switch(t.key){case"ArrowLeft":o&&i.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",e):i.value=""}},this.focusInputField=(t,e)=>{if("next"===t){let t=e+1,r=this.numerics[t<this.length?t:e],i=r?this.getInputElement(r):void 0;i&&i.focus()}if("prev"===t){let t=e-1,r=this.numerics[t>-1?t:e],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return X`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,e)=>X`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @keydown=${t=>this.handleKeyDown(t,e)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,e){let r=t.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===t.inputType?this.handlePaste(i,r,e):eK.isNumber(r)&&t.data?(i.value=t.data,this.focusInputField("next",e)):i.value=""}}handlePaste(t,e,r){let i=e[0];if(i&&eK.isNumber(i)){t.value=i;let o=e.substring(1);if(r+1<this.length&&o.length){let t=this.numerics[r+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}};iE.styles=[tC,ix],iC([tT({type:Number})],iE.prototype,"length",void 0),iE=iC([tD("wui-otp")],iE);var i_=r(75298);function iD(t,e,r){return t!==e&&(t-e<0?e-t:t-e)<=r+.1}let i$={generate(t,e,r){let i="#141414",o=[],n=function(t,e){let r=Array.prototype.slice.call(i_.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((t,e,r)=>(r%i==0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,0),a=e/n.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:t,y:e})=>{let r=(n.length-7)*a*t,l=(n.length-7)*a*e;for(let t=0;t<s.length;t+=1){let e=a*(7-2*t);o.push(J`
            <rect
              fill=${2===t?i:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*.45:.45*e}
              ry= ${0===t?(e-5)*.45:.45*e}
              stroke=${i}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?l+a*t+2.5:l+a*t}
              y= ${0===t?r+a*t+2.5:r+a*t}
            />
          `)}});let l=Math.floor((r+25)/a),c=n.length/2-l/2,u=n.length/2+l/2-1,h=[];n.forEach((t,e)=>{t.forEach((t,r)=>{!n[e][r]||e<7&&r<7||e>n.length-8&&r<7||e<7&&r>n.length-8||e>c&&e<u&&r>c&&r<u||h.push([e*a+a/2,r*a+a/2])})});let d={};return h.forEach(([t,e])=>{d[t]?d[t]?.push(e):d[t]=[e]}),Object.entries(d).map(([t,e])=>{let r=e.filter(t=>e.every(e=>!iD(t,e,a)));return[Number(t),r]}).forEach(([t,e])=>{e.forEach(e=>{o.push(J`<circle cx=${t} cy=${e} fill=${i} r=${a/2.5} />`)})}),Object.entries(d).filter(([t,e])=>e.length>1).map(([t,e])=>{let r=e.filter(t=>e.some(e=>iD(t,e,a)));return[Number(t),r]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);let r=[];for(let t of e){let e=r.find(e=>e.some(e=>iD(t,e,a)));e?e.push(t):r.push([t])}return[t,r.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,r])=>{o.push(J`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),o}};var ik=d`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,iA=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iS=class extends tw{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,X`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return J`
      <svg height=${t} width=${t}>
        ${i$.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:X`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};iS.styles=[tC,ik],iA([tT()],iS.prototype,"uri",void 0),iA([tT({type:Number})],iS.prototype,"size",void 0),iA([tT()],iS.prototype,"theme",void 0),iA([tT()],iS.prototype,"imageSrc",void 0),iA([tT()],iS.prototype,"alt",void 0),iS=iA([tD("wui-qr-code")],iS);var iO=d`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let iI=class extends tw{constructor(){super(...arguments),this.inputComponentRef=rP()}render(){return X`
      <wui-input-text
        ${rM(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let t=this.inputComponentRef.value,e=t?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};iI.styles=[tC,iO],iI=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([tD("wui-search-bar")],iI);var iT=d`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,iR=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iN=class extends tw{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return X`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};iN.styles=[tC,iT],iR([tT()],iN.prototype,"backgroundColor",void 0),iR([tT()],iN.prototype,"iconColor",void 0),iR([tT()],iN.prototype,"icon",void 0),iR([tT()],iN.prototype,"message",void 0),iN=iR([tD("wui-snackbar")],iN);var iP=d`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,iU=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iB=class extends tw{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{let r=e===this.activeTab;return X`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){let r=this.buttons[this.activeTab],i=this.buttons[t],o=r?.querySelector("wui-text"),n=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=n?.getBoundingClientRect();r&&o&&!e&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};iB.styles=[tC,tE,iP],iU([tT({type:Array})],iB.prototype,"tabs",void 0),iU([tT()],iB.prototype,"onTabChange",void 0),iU([tT({type:Array})],iB.prototype,"buttons",void 0),iU([tT({type:Boolean})],iB.prototype,"disabled",void 0),iU([tR()],iB.prototype,"activeTab",void 0),iU([tR()],iB.prototype,"localTabWidth",void 0),iU([tR()],iB.prototype,"isDense",void 0),iB=iU([tD("wui-tabs")],iB);var iM=d`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,iL=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let ij=class extends tw{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return X`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ij.styles=[tC,tE,iM],iL([tT()],ij.prototype,"placement",void 0),iL([tT()],ij.prototype,"message",void 0),ij=iL([tD("wui-tooltip")],ij);var iz=d`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,iW=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iH=class extends tw{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,X`${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:X`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};iH.styles=[tC,iz],iW([tT()],iH.prototype,"imageSrc",void 0),iW([tT()],iH.prototype,"alt",void 0),iW([tT({type:Boolean})],iH.prototype,"borderRadiusFull",void 0),iH=iW([tD("wui-visual-thumbnail")],iH);var iF=d`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,iZ=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iV=class extends tw{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&eK.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&eK.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&eK.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&eK.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&eK.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&eK.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&eK.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&eK.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};iV.styles=[tC,iF],iZ([tT()],iV.prototype,"gridTemplateRows",void 0),iZ([tT()],iV.prototype,"gridTemplateColumns",void 0),iZ([tT()],iV.prototype,"justifyItems",void 0),iZ([tT()],iV.prototype,"alignItems",void 0),iZ([tT()],iV.prototype,"justifyContent",void 0),iZ([tT()],iV.prototype,"alignContent",void 0),iZ([tT()],iV.prototype,"columnGap",void 0),iZ([tT()],iV.prototype,"rowGap",void 0),iZ([tT()],iV.prototype,"gap",void 0),iZ([tT()],iV.prototype,"padding",void 0),iZ([tT()],iV.prototype,"margin",void 0),iV=iZ([tD("wui-grid")],iV);var iq=d`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,iK=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let iY=class extends tw{constructor(){super(...arguments),this.text=""}render(){return X`${this.template()}`}template(){return this.text?X`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};iY.styles=[tC,iq],iK([tT()],iY.prototype,"text",void 0),iY=iK([tD("wui-separator")],iY);var iG=r(44519);let iX=["receive","deposit","borrow","claim"],iJ=["withdraw","repay","burn"],iQ={getTransactionGroupTitle:t=>t===iG.E.getYear()?"This Year":t,getTransactionImages(t){let[e,r]=t,i=!!e&&t?.every(t=>!!t.nft_info),o=t?.length>1;return t?.length!==2||i?o?t.map(t=>this.getTransactionImage(t)):[this.getTransactionImage(e)]:[this.getTransactionImage(e),this.getTransactionImage(r)]},getTransactionImage:t=>({type:iQ.getTransactionTransferTokenType(t),url:iQ.getTransactionImageURL(t)}),getTransactionImageURL(t){let e=null,r=!!t?.nft_info,i=!!t?.fungible_info;return t&&r?e=t?.nft_info?.content?.preview?.url:t&&i&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType:t=>t?.fungible_info?"FUNGIBLE":t?.nft_info?"NFT":null,getTransactionDescriptions(t){let e=t.metadata?.operationType,r=t.transfers,i=t.transfers?.length>0,o=t.transfers?.length>1,n=i&&r?.every(t=>!!t.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i)return("send"===e||"receive"===e)&&n?[l=eK.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),eK.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[t.metadata.status];if(o)return r.map(t=>this.getTransferDescription(t));let c="";return iX.includes(e)?c="+":iJ.includes(e)&&(c="-"),[l=c.concat(l)]},getTransferDescription(t){let e="";return t&&(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:t=>t?parseFloat(t).toFixed(3):null}},32612:function(t,e,r){"use strict";let i;r.d(e,{OY:function(){return eN},o1:function(){return eR}}),r(2265);var o,n,a,s,l,c,u,h,d,f,p,g,w,b,m,v,y,x,C,E,_,D,$,k,A=r(33349),S=r(75404),O=r(51250),I=r(56511),T=r(69307),R=r(92468),N=r(57173);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=t=>t??N.Ld;var U=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let B=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=O.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=O.AccountController.state.address,this.balanceVal=O.AccountController.state.balance,this.balanceSymbol=O.AccountController.state.balanceSymbol,this.profileName=O.AccountController.state.profileName,this.profileImage=O.AccountController.state.profileImage,this.network=O.NetworkController.state.caipNetwork,this.unsubscribe.push(...[O.AccountController.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),O.NetworkController.subscribeKey("caipNetwork",t=>this.network=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.networkImages[this.network?.imageId??""],e="show"===this.balance;return T.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${P(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${P(t)}
        avatarSrc=${P(this.profileImage)}
        balance=${e?O.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){O.IN.open()}};U([(0,R.Cb)({type:Boolean})],B.prototype,"disabled",void 0),U([(0,R.Cb)()],B.prototype,"balance",void 0),U([(0,R.SB)()],B.prototype,"address",void 0),U([(0,R.SB)()],B.prototype,"balanceVal",void 0),U([(0,R.SB)()],B.prototype,"balanceSymbol",void 0),U([(0,R.SB)()],B.prototype,"profileName",void 0),U([(0,R.SB)()],B.prototype,"profileImage",void 0),U([(0,R.SB)()],B.prototype,"network",void 0),B=U([(0,I.customElement)("w3m-account-button")],B);var M=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let L=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=O.AccountController.state.isConnected,this.unsubscribe.push(O.AccountController.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?T.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${P(this.balance)}
          >
          </w3m-account-button>
        `:T.dy`
          <w3m-connect-button
            size=${P(this.size)}
            label=${P(this.label)}
            loadingLabel=${P(this.loadingLabel)}
          ></w3m-connect-button>
        `}};M([(0,R.Cb)({type:Boolean})],L.prototype,"disabled",void 0),M([(0,R.Cb)()],L.prototype,"balance",void 0),M([(0,R.Cb)()],L.prototype,"size",void 0),M([(0,R.Cb)()],L.prototype,"label",void 0),M([(0,R.Cb)()],L.prototype,"loadingLabel",void 0),M([(0,R.SB)()],L.prototype,"isAccount",void 0),L=M([(0,I.customElement)("w3m-button")],L);var j=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let z=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=O.IN.state.open,this.unsubscribe.push(O.IN.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-connect-button
        size=${P(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?O.IN.close():O.IN.open()}};j([(0,R.Cb)()],z.prototype,"size",void 0),j([(0,R.Cb)()],z.prototype,"label",void 0),j([(0,R.Cb)()],z.prototype,"loadingLabel",void 0),j([(0,R.SB)()],z.prototype,"open",void 0),z=j([(0,I.customElement)("w3m-connect-button")],z),r(9448);var W=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let H=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=O.NetworkController.state.caipNetwork,this.connected=O.AccountController.state.isConnected,this.unsubscribe.push(...[O.NetworkController.subscribeKey("caipNetwork",t=>this.network=t),O.AccountController.subscribeKey("isConnected",t=>this.connected=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${P(O.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){O.IN.open({view:"Networks"})}};W([(0,R.Cb)({type:Boolean})],H.prototype,"disabled",void 0),W([(0,R.SB)()],H.prototype,"network",void 0),W([(0,R.SB)()],H.prototype,"connected",void 0),H=W([(0,I.customElement)("w3m-network-button")],H);var F=T.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,Z=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let V=class extends T.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=O.RouterController.state.view,this.unsubscribe.push(O.RouterController.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{let e=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:e}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=e}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return T.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return T.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return T.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return T.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return T.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return T.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return T.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return T.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return T.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return T.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return T.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return T.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return T.dy`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return T.dy`<w3m-transactions-view></w3m-transactions-view>`}}async onViewChange(t){let{history:e}=O.RouterController.state,r=-10,i=10;e.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=e.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};V.styles=F,Z([(0,R.SB)()],V.prototype,"view",void 0),V=Z([(0,I.customElement)("w3m-router")],V);var q=T.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,K=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let Y=class extends T.oi{constructor(){super(),this.usubscribe=[],this.networkImages=O.WM.state.networkImages,this.address=O.AccountController.state.address,this.profileImage=O.AccountController.state.profileImage,this.profileName=O.AccountController.state.profileName,this.balance=O.AccountController.state.balance,this.balanceSymbol=O.AccountController.state.balanceSymbol,this.network=O.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[O.AccountController.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):O.IN.close()})],O.NetworkController.subscribeKey("caipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let t=this.networkImages[this.network?.imageId??""];return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${P(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?I.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):I.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${O.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${P(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:t}=O.AccountController.state;return t?T.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:t}=O.NetworkController.state,e=!!t&&t.length>1,r=t?.find(({id:t})=>t===this.network?.id);return e||!r}onCopyAddress(){try{this.address&&(O.j1.copyToClopboard(this.address),O.SnackController.showSuccess("Address copied"))}catch{O.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&O.RouterController.push("Networks")}onTransactions(){O.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),O.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await O.ConnectionController.disconnect(),O.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),O.IN.close()}catch{O.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),O.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:t}=O.AccountController.state;t&&O.j1.openHref(t,"_blank")}};Y.styles=q,K([(0,R.SB)()],Y.prototype,"address",void 0),K([(0,R.SB)()],Y.prototype,"profileImage",void 0),K([(0,R.SB)()],Y.prototype,"profileName",void 0),K([(0,R.SB)()],Y.prototype,"balance",void 0),K([(0,R.SB)()],Y.prototype,"balanceSymbol",void 0),K([(0,R.SB)()],Y.prototype,"network",void 0),K([(0,R.SB)()],Y.prototype,"disconecting",void 0),Y=K([(0,I.customElement)("w3m-account-view")],Y);var G=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let X=class extends T.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=O.j1.debounce(t=>{this.search=t})}render(){let t=this.search.length>=2;return T.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?T.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:T.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return O.j1.isMobile()?T.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){O.RouterController.push("ConnectingWalletConnect")}};G([(0,R.SB)()],X.prototype,"search",void 0),X=G([(0,I.customElement)("w3m-all-wallets-view")],X);var J=T.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Q=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tt=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.connectors=O.ConnectorController.state.connectors,this.unsubscribe.push(O.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(O.j1.isMobile())return null;let t=this.connectors.find(t=>"WALLET_CONNECT"===t.type);return t?T.dy`
      <wui-list-wallet
        imageSrc=${P(O.fz.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:t}=O.OptionsController.state;return t?.length?this.filterOutDuplicateWallets(t).map(t=>T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){let{featured:t}=O.ApiController.state;return t.length?this.filterOutDuplicateWallets(t).map(t=>T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return O.MO.getRecentWallets().map(t=>T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>"ANNOUNCED"!==t.type?null:T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let t=this.connectors.find(t=>"ANNOUNCED"===t.type);return this.connectors.map(e=>"INJECTED"===e.type&&O.ConnectionController.checkInstalled()?T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel=${P(t?void 0:"installed")}
          tagVariant=${P(t?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let t=10*Math.floor(O.ApiController.state.count/10);return T.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:t}=O.ApiController.state,{customWallets:e,featuredWalletIds:r}=O.OptionsController.state,{connectors:i}=O.ConnectorController.state,o=O.MO.getRecentWallets(),n=i.filter(t=>"ANNOUNCED"===t.type);if(r||e||!t.length)return null;let a=n.length+o.length;return this.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-a)).map(t=>T.dy`
        <wui-list-wallet
          imageSrc=${P(O.fz.getWalletImage(t))}
          name=${t?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}onConnector(t){"WALLET_CONNECT"===t.type?O.j1.isMobile()?O.RouterController.push("AllWallets"):O.RouterController.push("ConnectingWalletConnect"):O.RouterController.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){let{connectors:e}=O.ConnectorController.state,r=O.MO.getRecentWallets().map(t=>t.id),i=e.map(t=>t.info?.rdns).filter(Boolean);return t.filter(t=>!r.includes(t.id)&&!i.includes(t.rdns??void 0))}onAllWallets(){O.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),O.RouterController.push("AllWallets")}onConnectWallet(t){O.RouterController.push("ConnectingWalletConnect",{wallet:t})}};tt.styles=J,Q([(0,R.SB)()],tt.prototype,"connectors",void 0),tt=Q([(0,I.customElement)("w3m-connect-view")],tt);var te=T.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,tr=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};class ti extends T.oi{constructor(){super(),this.wallet=O.RouterController.state.data?.wallet,this.connector=O.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=O.fz.getWalletImage(this.wallet)??O.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=O.ConnectionController.state.wcUri,this.error=O.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[O.ConnectionController.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),O.ConnectionController.subscribeKey("wcError",t=>this.error=t),O.ConnectionController.subscribeKey("buffering",t=>this.buffering=t)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,e=`Continue in ${this.name}`;return this.buffering&&(e="Connecting..."),this.error&&(e="Connection declined"),T.dy`
      <wui-flex
        data-error=${P(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${P(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?T.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(O.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let t=O.ThemeController.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return T.dy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(O.j1.copyToClopboard(this.uri),O.SnackController.showSuccess("Link copied"))}catch{O.SnackController.showError("Failed to copy")}}}ti.styles=te,tr([(0,R.SB)()],ti.prototype,"uri",void 0),tr([(0,R.SB)()],ti.prototype,"error",void 0),tr([(0,R.SB)()],ti.prototype,"ready",void 0),tr([(0,R.SB)()],ti.prototype,"showRetry",void 0),tr([(0,R.SB)()],ti.prototype,"buffering",void 0),tr([(0,R.Cb)({type:Boolean})],ti.prototype,"isMobile",void 0),tr([(0,R.Cb)()],ti.prototype,"onRetry",void 0);let to={INJECTED:"browser",ANNOUNCED:"browser"},tn=class extends ti{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:to[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&O.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await O.ConnectionController.connectExternal(this.connector),O.IN.close(),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};tn=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-external-view")],tn);let ta=class extends T.oi{constructor(){super(...arguments),this.dappUrl=O.OptionsController.state.metadata?.url,this.dappName=O.OptionsController.state.metadata?.name}render(){return T.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?T.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&O.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){O.RouterController.goBack()}};ta=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-siwe-view")],ta);var ts=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tl=class extends T.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=O.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),O.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),T.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):T.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{let{wcPairingExpiry:e}=O.ConnectionController.state;if(t||O.j1.isPairingExpired(e)){if(O.ConnectionController.connectWalletConnect(),this.wallet){let t=O.fz.getWalletImage(this.wallet);t&&O.MO.setConnectedWalletImageUrl(t)}else{let t=O.ConnectorController.state.connectors.find(t=>"WALLET_CONNECT"===t.type),e=O.fz.getConnectorImage(t);e&&O.MO.setConnectedWalletImageUrl(e)}await O.ConnectionController.state.wcPromise,this.finalizeConnection(),O.IN.close()}}catch(t){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),O.ConnectionController.setWcError(!0),O.j1.isAllowedRetry(this.lastRetry)&&(O.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:t,recentWallet:e}=O.ConnectionController.state;t&&O.MO.setWalletConnectDeepLink(t),e&&O.MO.setWeb3ModalRecent(e),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:t,desktop_link:e,webapp_link:r,injected:i,rdns:o}=this.wallet,n=i?.map(({injected_id:t})=>t).filter(Boolean),a=o?[o]:n??[],s=a.length,l=O.ConnectionController.checkInstalled(a),c=s&&l,u=e&&!O.j1.isMobile();c&&this.platforms.push("browser"),t&&this.platforms.push(O.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return T.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return T.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return T.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return T.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return T.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return T.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?T.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){let e=this.shadowRoot?.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ts([(0,R.SB)()],tl.prototype,"platform",void 0),ts([(0,R.SB)()],tl.prototype,"platforms",void 0),tl=ts([(0,I.customElement)("w3m-connecting-wc-view")],tl);let tc=class extends T.oi{constructor(){super(...arguments),this.wallet=O.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return T.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?T.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?T.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?T.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?T.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&O.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&O.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.j1.openHref(this.wallet.homepage,"_blank")}};tc=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-downloads-view")],tc);let tu=class extends T.oi{render(){return T.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{O.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:t,featured:e}=O.ApiController.state,{customWallets:r}=O.OptionsController.state;return[...e,...r??[],...t].slice(0,4).map(t=>T.dy`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${P(O.fz.getWalletImage(t))}
          @click=${()=>{O.j1.openHref(t.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};tu=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-get-wallet-view")],tu);var th=T.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,td=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tf=class extends T.oi{constructor(){super(),this.network=O.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=O.NetworkController.state.caipNetwork,this.unsubscribe.push(O.NetworkController.subscribeKey("caipNetwork",t=>{t?.id!==this.currentNetwork?.id&&O.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let t=this.error?"Switch declined":"Approve in wallet",e=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return T.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${P(O.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:T.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await O.NetworkController.switchActiveNetwork(this.network),O.RouterController.goBack())}catch{this.error=!0}}};tf.styles=th,td([(0,R.SB)()],tf.prototype,"showRetry",void 0),td([(0,R.SB)()],tf.prototype,"error",void 0),td([(0,R.SB)()],tf.prototype,"currentNetwork",void 0),tf=td([(0,I.customElement)("w3m-network-switch-view")],tf);var tp=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tg=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=O.NetworkController.state.caipNetwork,this.unsubscribe.push(O.NetworkController.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){O.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),O.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:t,requestedCaipNetworks:e,supportsAllNetworks:r}=O.NetworkController.state;return t?.length&&e?.sort((e,r)=>t.indexOf(r.id)-t.indexOf(e.id)),e?.map(e=>T.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${P(O.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!t?.includes(e.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(t){let{isConnected:e}=O.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=O.NetworkController.state;e&&o?.id!==t.id?r?.includes(t.id)?await O.NetworkController.switchActiveNetwork(t):i&&O.RouterController.push("SwitchNetwork",{network:t}):e||(O.NetworkController.setCaipNetwork(t),O.RouterController.push("Connect"))}};tp([(0,R.SB)()],tg.prototype,"caipNetwork",void 0),tg=tp([(0,I.customElement)("w3m-networks-view")],tg);var tw=r(44519),tb=T.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,tm=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tv="last-transaction",ty=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=O.AccountController.state.address,this.transactions=O.sl.state.transactions,this.transactionsByYear=O.sl.state.transactionsByYear,this.loading=O.sl.state.loading,this.empty=O.sl.state.empty,this.next=O.sl.state.next,this.unsubscribe.push(...[O.AccountController.subscribe(t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,O.sl.resetTransactions(),O.sl.fetchTransactions(t.address))}),O.sl.subscribe(t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})])}firstUpdated(){0===this.transactions.length&&O.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((e,r)=>{let i=r===t.length-1,o=parseInt(e,10),n=I.TransactionUtil.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?T.dy`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(t,e){let{date:r,descriptions:i,direction:o,isAllNFT:n,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(t),u=l?.length>1;return l?.length!==2||n?u?l.map((t,i)=>{let o=I.TransactionUtil.getTransferDescription(t),n=e&&i===l.length-1;return T.dy` <wui-transaction-list-item
          date=${r}
          direction=${t.direction}
          id=${n&&this.next?tv:""}
          status=${s}
          type=${c}
          onlyDirectionIcon=${!0}
          .images=${[a?.[i]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`}):T.dy`
      <wui-transaction-list-item
        date=${r}
        direction=${o}
        id=${e&&this.next?tv:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:T.dy`
        <wui-transaction-list-item
          date=${r}
          direction=${o}
          id=${e&&this.next?tv:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map((r,i)=>{let o=e&&i===t.length-1;return T.dy`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return T.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(T.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}createPaginationObserver(){let{projectId:t}=O.OptionsController.state;this.paginationObserver=new IntersectionObserver(([e])=>{e?.isIntersecting&&!this.loading&&(O.sl.fetchTransactions(this.address),O.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let t=this.shadowRoot?.querySelector(`#${tv}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){let e=tw.E.getRelativeDateFromNow(t?.metadata?.minedAt),r=I.TransactionUtil.getTransactionDescriptions(t),i=t?.transfers,o=t?.transfers?.[0],n=!!o&&t?.transfers?.every(t=>!!t.nft_info),a=I.TransactionUtil.getTransactionImages(i);return{date:e,direction:o?.direction,descriptions:r,isAllNFT:n,images:a,status:t.metadata?.status,transfers:i,type:t.metadata?.operationType}}};ty.styles=tb,tm([(0,R.SB)()],ty.prototype,"address",void 0),tm([(0,R.SB)()],ty.prototype,"transactions",void 0),tm([(0,R.SB)()],ty.prototype,"transactionsByYear",void 0),tm([(0,R.SB)()],ty.prototype,"loading",void 0),tm([(0,R.SB)()],ty.prototype,"empty",void 0),tm([(0,R.SB)()],ty.prototype,"next",void 0),ty=tm([(0,I.customElement)("w3m-transactions-view")],ty);let tx=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],tC=class extends T.oi{render(){return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${tx}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{O.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tC=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-what-is-a-network-view")],tC);let tE=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],t_=class extends T.oi{render(){return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${tE}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){O.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),O.RouterController.push("GetWallet")}};t_=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-what-is-a-wallet-view")],t_);var tD=T.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,t$=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tk="local-paginator",tA=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!O.ApiController.state.wallets.length,this.wallets=O.ApiController.state.wallets,this.recommended=O.ApiController.state.recommended,this.featured=O.ApiController.state.featured,this.unsubscribe.push(...[O.ApiController.subscribeKey("wallets",t=>this.wallets=t),O.ApiController.subscribeKey("recommended",t=>this.recommended=t),O.ApiController.subscribeKey("featured",t=>this.featured=t)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return T.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let t=this.shadowRoot?.querySelector("wui-grid");this.initial&&t&&(await O.ApiController.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>T.dy`
        <wui-card-select-loader type="wallet" id=${P(e)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(t=>T.dy`
        <wui-card-select
          imageSrc=${P(O.fz.getWalletImage(t))}
          type="wallet"
          name=${t.name}
          @click=${()=>this.onConnectWallet(t)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:t,recommended:e,featured:r,count:i}=O.ApiController.state,o=window.innerWidth<352?3:4,n=t.length+e.length,a=Math.ceil(n/o)*o-n+o;return(a-=t.length?r.length%o:0,0===i||[...r,...t,...e].length<i)?this.shimmerTemplate(a,tk):null}createPaginationObserver(){let t=this.shadowRoot?.querySelector(`#${tk}`);t&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.initial){let{page:t,count:e,wallets:r}=O.ApiController.state;r.length<e&&O.ApiController.fetchWallets({page:t+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){let{connectors:e}=O.ConnectorController.state,r=e.find(({explorerId:e})=>e===t.id);r?O.RouterController.push("ConnectingExternal",{connector:r}):O.RouterController.push("ConnectingWalletConnect",{wallet:t})}};tA.styles=tD,t$([(0,R.SB)()],tA.prototype,"initial",void 0),t$([(0,R.SB)()],tA.prototype,"wallets",void 0),t$([(0,R.SB)()],tA.prototype,"recommended",void 0),t$([(0,R.SB)()],tA.prototype,"featured",void 0),tA=t$([(0,I.customElement)("w3m-all-wallets-list")],tA);var tS=T.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,tO=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tI=class extends T.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?T.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await O.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:t}=O.ApiController.state;return t.length?T.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(t=>T.dy`
            <wui-card-select
              imageSrc=${P(O.fz.getWalletImage(t))}
              type="wallet"
              name=${t.name}
              @click=${()=>this.onConnectWallet(t)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:T.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){let{connectors:e}=O.ConnectorController.state,r=e.find(({explorerId:e})=>e===t.id);r?O.RouterController.push("ConnectingExternal",{connector:r}):O.RouterController.push("ConnectingWalletConnect",{wallet:t})}};tI.styles=tS,tO([(0,R.SB)()],tI.prototype,"loading",void 0),tO([(0,R.Cb)()],tI.prototype,"query",void 0),tI=tO([(0,I.customElement)("w3m-all-wallets-search")],tI);var tT=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tR=class extends T.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(O.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.generateTabs();return T.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){let e=this.platformTabs[t];e&&this.onSelectPlatfrom?.(e)}};tT([(0,R.Cb)({type:Array})],tR.prototype,"platforms",void 0),tT([(0,R.Cb)()],tR.prototype,"onSelectPlatfrom",void 0),tT([(0,R.SB)()],tR.prototype,"buffering",void 0),tR=tT([(0,I.customElement)("w3m-connecting-header")],tR);let tN=class extends ti{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:t}=O.ConnectorController.state,e=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns),r=t.find(t=>"INJECTED"===t.type);e?await O.ConnectionController.connectExternal(e):r&&await O.ConnectionController.connectExternal(r),O.IN.close(),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};tN=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-browser")],tN);let tP=class extends ti{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:t,name:e}=this.wallet,{redirect:r,href:i}=O.j1.formatNativeUrl(t,this.uri);O.ConnectionController.setWcLinking({name:e,href:i}),O.ConnectionController.setRecentWallet(this.wallet),O.j1.openHref(r,"_self")}catch{this.error=!0}}};tP=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-desktop")],tP);let tU=class extends ti{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:t,name:e}=this.wallet,{redirect:r,href:i}=O.j1.formatNativeUrl(t,this.uri);O.ConnectionController.setWcLinking({name:e,href:i}),O.ConnectionController.setRecentWallet(this.wallet),O.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let t=O.j1.isIos();document?.visibilityState==="visible"&&!this.error&&t&&(O.ConnectionController.setBuffering(!0),setTimeout(()=>{O.ConnectionController.setBuffering(!1)},5e3))}};tU=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-mobile")],tU);var tB=T.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let tM=class extends ti{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),T.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return O.ConnectionController.setWcLinking(void 0),O.ConnectionController.setRecentWallet(this.wallet),T.dy`<wui-qr-code
      size=${t}
      theme=${O.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${P(O.fz.getWalletImage(this.wallet))}
      alt=${P(e)}
    ></wui-qr-code>`}};tM.styles=tB,tM=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-qrcode")],tM);var tL=T.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let tj=class extends T.oi{constructor(){super(...arguments),this.dappImageUrl=O.OptionsController.state.metadata?.icons,this.walletImageUrl=O.MO.getConnectedWalletImageUrl()}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return T.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};tj.styles=tL,tj=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-siwe")],tj);let tz=class extends T.oi{constructor(){if(super(),this.wallet=O.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return T.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${P(O.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};tz=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-unsupported")],tz);let tW=class extends ti{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:t,name:e}=this.wallet,{redirect:r,href:i}=O.j1.formatUniversalUrl(t,this.uri);O.ConnectionController.setWcLinking({name:e,href:i}),O.ConnectionController.setRecentWallet(this.wallet),O.j1.openHref(r,"_blank")}catch{this.error=!0}}};tW=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-connecting-wc-web")],tW);var tH=T.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,tF=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};function tZ(){let t=O.RouterController.state.data?.connector?.name,e=O.RouterController.state.data?.wallet?.name,r=O.RouterController.state.data?.network?.name,i=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:i?`Get ${i}`:"Downloads",Transactions:"Activity"}}let tV=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.heading=tZ()[O.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(O.RouterController.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),O.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${O.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){O.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),O.RouterController.push("WhatIsAWallet")}titleTemplate(){return T.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:t}=O.RouterController.state;return this.showBack?T.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${O.RouterController.goBack}
      ></wui-icon-link>`:T.dy`<wui-icon-link
      data-hidden=${"Connect"!==t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?T.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){let e=this.shadowRoot?.querySelector("wui-text");if(e){let r=tZ()[t];await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:t}=O.RouterController.state,e=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};tV.styles=[tH],tF([(0,R.SB)()],tV.prototype,"heading",void 0),tF([(0,R.SB)()],tV.prototype,"buffering",void 0),tF([(0,R.SB)()],tV.prototype,"showBack",void 0),tV=tF([(0,I.customElement)("w3m-header")],tV);var tq=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tK=class extends T.oi{constructor(){super(...arguments),this.data=[]}render(){return T.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>T.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(t=>T.dy`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};tq([(0,R.Cb)({type:Array})],tK.prototype,"data",void 0),tK=tq([(0,I.customElement)("w3m-help-widget")],tK);var tY=T.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let tG=class extends T.oi{render(){let{termsConditionsUrl:t,privacyPolicyUrl:e}=O.OptionsController.state;return t||e?T.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:t,privacyPolicyUrl:e}=O.OptionsController.state;return t&&e?"and":""}termsTemplate(){let{termsConditionsUrl:t}=O.OptionsController.state;return t?T.dy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:t}=O.OptionsController.state;return t?T.dy`<a href=${t}>Privacy Policy</a>`:null}};tG.styles=[tY],tG=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}([(0,I.customElement)("w3m-legal-footer")],tG);var tX=T.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,tJ=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let tQ=class extends T.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:t,app_store:e,play_store:r,chrome_store:i,homepage:o}=this.wallet,n=O.j1.isMobile(),a=O.j1.isIos(),s=O.j1.isAndroid(),l=[e,r,o,i].filter(Boolean).length>1,c=I.UiHelperUtil.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return l&&!n?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>O.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&o?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&a?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&O.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.j1.openHref(this.wallet.homepage,"_blank")}};tQ.styles=[tX],tJ([(0,R.Cb)({type:Object})],tQ.prototype,"wallet",void 0),tQ=tJ([(0,I.customElement)("w3m-mobile-download-links")],tQ);var t0=T.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,t1=function(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let t2={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},t3=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=O.SnackController.state.open,this.unsubscribe.push(O.SnackController.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){let{message:t,variant:e}=O.SnackController.state,r=t2[e];return T.dy`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>O.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};t3.styles=t0,t1([(0,R.SB)()],t3.prototype,"open",void 0),t3=t1([(0,I.customElement)("w3m-snackbar")],t3);let t5=!1;class t4{constructor(t){this.initPromise=void 0,this.setIsConnected=t=>{O.AccountController.setIsConnected(t)},this.setCaipAddress=t=>{O.AccountController.setCaipAddress(t)},this.setBalance=(t,e)=>{O.AccountController.setBalance(t,e)},this.setProfileName=t=>{O.AccountController.setProfileName(t)},this.setProfileImage=t=>{O.AccountController.setProfileImage(t)},this.resetAccount=()=>{O.AccountController.resetAccount()},this.setCaipNetwork=t=>{O.NetworkController.setCaipNetwork(t)},this.getCaipNetwork=()=>O.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=t=>{O.NetworkController.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>O.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{O.NetworkController.resetNetwork()},this.setConnectors=t=>{O.ConnectorController.setConnectors(t)},this.addConnector=t=>{O.ConnectorController.addConnector(t)},this.getConnectors=()=>O.ConnectorController.getConnectors(),this.resetWcConnection=()=>{O.ConnectionController.resetWcConnection()},this.fetchIdentity=t=>O.Lr.fetchIdentity(t),this.setAddressExplorerUrl=t=>{O.AccountController.setAddressExplorerUrl(t)},this.setSIWENonce=t=>{O.yD.setNonce(t)},this.setSIWESession=t=>{O.yD.setSession(t)},this.setSIWEStatus=t=>{O.yD.setStatus(t)},this.setSIWEMessage=t=>{O.yD.setMessage(t)},this.getSIWENonce=()=>O.yD.state.nonce,this.getSIWESession=()=>O.yD.state.session,this.getSIWEStatus=()=>O.yD.state.status,this.getSIWEMessage=()=>O.yD.state.message,this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),O.IN.open(t)}async close(){await this.initOrContinue(),O.IN.close()}getThemeMode(){return O.ThemeController.state.themeMode}getThemeVariables(){return O.ThemeController.state.themeVariables}setThemeMode(t){O.ThemeController.setThemeMode(t),(0,I.setColorTheme)(O.ThemeController.state.themeMode)}setThemeVariables(t){O.ThemeController.setThemeVariables(t),(0,I.setThemeVariables)(O.ThemeController.state.themeVariables)}subscribeTheme(t){return O.ThemeController.subscribe(t)}getState(){return{...O.Ie.state}}subscribeState(t){return O.Ie.subscribe(t)}getEvent(){return{...O.Xs.state}}subscribeEvents(t){return O.Xs.subscribe(t)}subscribeSIWEState(t){return O.yD.subscribe(t)}initControllers(t){O.NetworkController.setClient(t.networkControllerClient),O.NetworkController.setDefaultCaipNetwork(t.defaultChain),O.OptionsController.setProjectId(t.projectId),O.OptionsController.setIncludeWalletIds(t.includeWalletIds),O.OptionsController.setExcludeWalletIds(t.excludeWalletIds),O.OptionsController.setFeaturedWalletIds(t.featuredWalletIds),O.OptionsController.setTokens(t.tokens),O.OptionsController.setTermsConditionsUrl(t.termsConditionsUrl),O.OptionsController.setPrivacyPolicyUrl(t.privacyPolicyUrl),O.OptionsController.setCustomWallets(t.customWallets),O.OptionsController.setEnableAnalytics(t.enableAnalytics),O.OptionsController.setSdkVersion(t._sdkVersion),O.ConnectionController.setClient(t.connectionControllerClient),t.siweControllerClient&&O.yD.setSIWEClient(t.siweControllerClient),t.metadata&&O.OptionsController.setMetadata(t.metadata),t.themeMode&&O.ThemeController.setThemeMode(t.themeMode),t.themeVariables&&O.ThemeController.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!t5&&O.j1.isClient()&&(t5=!0,this.initPromise=new Promise(async t=>{await Promise.all([Promise.resolve().then(r.bind(r,56511)),Promise.resolve().then(r.bind(r,9448))]);let e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),t()})),this.initPromise}}let t6={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.4.0"},t8={ConnectorExplorerIds:{[t6.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[t6.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[t6.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[t6.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[t6.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[t6.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[t6.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[t6.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[t6.INJECTED_CONNECTOR_ID]:"Browser Wallet",[t6.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[t6.COINBASE_CONNECTOR_ID]:"Coinbase",[t6.LEDGER_CONNECTOR_ID]:"Ledger",[t6.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[t6.INJECTED_CONNECTOR_ID]:"INJECTED",[t6.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[t6.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},t7={caipNetworkIdToNumber:t=>t?Number(t.split(":")[1]):void 0,getCaipTokens(t){if(!t)return;let e={};return Object.entries(t).forEach(([t,r])=>{e[`${t6.EIP155}:${t}`]=r}),e}};class t9 extends t4{constructor(t){let{wagmiConfig:e,siweConfig:r,chains:i,defaultChain:o,tokens:n,_sdkVersion:a,...s}=t;if(!e)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!e.connectors.find(t=>t.id===t6.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");super({networkControllerClient:{switchCaipNetwork:async t=>{let e=t7.caipNetworkIdToNumber(t?.id);e&&await (0,A.If)({chainId:e})},async getApprovedCaipNetworksData(){let t=localStorage.getItem("wagmi.wallet");if(t?.includes(t6.WALLET_CONNECT_CONNECTOR_ID)){let t=e.connectors.find(t=>t.id===t6.WALLET_CONNECT_CONNECTOR_ID);if(!t)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await t.getProvider(),i=r.signer?.session?.namespaces,o=i?.[t6.EIP155]?.methods,n=i?.[t6.EIP155]?.chains;return{supportsAllNetworks:o?.includes(t6.ADD_CHAIN_METHOD),approvedCaipNetworkIds:n}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async t=>{let r=e.connectors.find(t=>t.id===t6.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",e=>{"display_uri"===e.type&&(t(e.data),r.removeAllListeners())});let i=t7.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,A.$j)({connector:r,chainId:i})},connectExternal:async({id:t,provider:r,info:i})=>{let o=e.connectors.find(e=>e.id===t);if(!o)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&o.id===t6.EIP6963_CONNECTOR_ID&&o.setEip6963Wallet?.({provider:r,info:i});let n=t7.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,A.$j)({connector:o,chainId:n})},checkInstalled:t=>{let e=this.getConnectors().filter(t=>"ANNOUNCED"===t.type),r=this.getConnectors().find(t=>"INJECTED"===t.type);return t?!!(e.length&&t.some(t=>e.some(e=>e.info?.rdns===t)))||!!r&&!!window?.ethereum&&t.some(t=>!!window.ethereum?.[String(t)]):!!window.ethereum},disconnect:A.zP},siweControllerClient:r,defaultChain:function(t){if(t)return{id:`${t6.EIP155}:${t.id}`,name:t.name,imageId:t8.EIP155NetworkImageIds[t.id]}}(o),tokens:t7.getCaipTokens(n),_sdkVersion:a??`html-wagmi-${t6.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(i),this.syncConnectors(e),this.listenConnectors(e),(0,A.uH)(()=>this.syncAccount()),(0,A.QC)(()=>this.syncNetwork())}getState(){let t=super.getState();return{...t,selectedNetworkId:t7.caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(e=>t({...e,selectedNetworkId:t7.caipNetworkIdToNumber(e.selectedNetworkId)}))}syncRequestedNetworks(t){let e=t?.map(t=>({id:`${t6.EIP155}:${t.id}`,name:t.name,imageId:t8.EIP155NetworkImageIds[t.id],imageUrl:this.options?.chainImages?.[t.id]}));this.setRequestedCaipNetworks(e??[])}async syncAccount(){let{address:t,isConnected:e}=(0,A.D0)(),{chain:r}=(0,A.Hy)();if(this.resetAccount(),e&&t&&r){let i=`${t6.EIP155}:${r.id}:${t}`;this.setIsConnected(e),this.setCaipAddress(i),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!e&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:t,isConnected:e}=(0,A.D0)(),{chain:r}=(0,A.Hy)();if(r){let i=String(r.id),o=`${t6.EIP155}:${i}`;if(this.setCaipNetwork({id:o,name:r.name,imageId:t8.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),e&&t){let e=`${t6.EIP155}:${r.id}:${t}`;if(this.setCaipAddress(e),r.blockExplorers?.default?.url){let e=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(e)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{let{name:e,avatar:r}=await this.fetchIdentity({caipChainId:`${t6.EIP155}:${S.R.id}`,address:t});this.setProfileName(e),this.setProfileImage(r)}catch{let e=await (0,A.Lk)({address:t,chainId:S.R.id});if(e){this.setProfileName(e);let t=await (0,A.w6)({name:e,chainId:S.R.id});t&&this.setProfileImage(t)}}}async syncBalance(t,e){let r=await (0,A.EG)({address:t,chainId:e.id,token:this.options?.tokens?.[e.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){let e=[];t.connectors.forEach(({id:t,name:r})=>{t!==t6.EIP6963_CONNECTOR_ID&&e.push({id:t,explorerId:t8.ConnectorExplorerIds[t],imageId:t8.ConnectorImageIds[t],imageUrl:this.options?.connectorImages?.[t],name:t8.ConnectorNamesMap[t]??r,type:t8.ConnectorTypesMap[t]??"EXTERNAL"})}),this.setConnectors(e)}eip6963EventHandler(t,e){if(e.detail){let{info:r,provider:i}=e.detail;this.getConnectors().find(t=>t.name===r.name)||(this.addConnector({id:t6.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[t6.EIP6963_CONNECTOR_ID],name:r.name,provider:i,info:r}),t.isAuthorized({info:r,provider:i}))}}listenConnectors(t){let e=t.connectors.find(t=>t.id===t6.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&e){let t=this.eip6963EventHandler.bind(this,e);window.addEventListener(t6.EIP6963_ANNOUNCE_EVENT,t),window.dispatchEvent(new Event(t6.EIP6963_REQUEST_EVENT))}}}var et=r(63877),ee=function(t,e,r,i,o){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(t,r):o?o.value=r:e.set(t,r),r},er=function(t,e,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};let ei="connectedRdns";class eo extends et._{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",o.set(this,void 0),n.set(this,void 0),ee(this,o,this.options.getProvider(),"f")}async connect(t){let e=await super.connect(t);return er(this,n,"f")&&this.storage?.setItem(ei,er(this,n,"f").info.rdns),e}async disconnect(){await super.disconnect(),this.storage?.removeItem(ei),ee(this,n,void 0,"f")}async isAuthorized(t){let e=this.storage?.getItem(ei);if(e){if(!t||e!==t.info.rdns)return!0;ee(this,n,t,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(er(this,n,"f")?.provider??er(this,o,"f"))}setEip6963Wallet(t){ee(this,n,t,"f")}}o=new WeakMap,n=new WeakMap;var en=r(67133);"undefined"==typeof window||(window.Buffer||(window.Buffer=en.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var ea=r(51056),es=r(38026),el=r(40106),ec=r(46750),eu=r(39803),eh=r(48519),ed=r(71061),ef=r(39730),ep=r(21693),eg=class extends ec.wR{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,ec.Ko)(this,a,void 0),(0,ec.Ko)(this,s,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,eu.K)(t[0])})},this.onChainChanged=t=>{let e=(0,el.J)(t),r=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{let e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await e.enable(),i=(0,eu.K)(r[0]),o=await this.getChainId(),n=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,n=this.isChainUnsupported(o)),{account:i,chain:{id:o,unsupported:n}}}catch(t){if(/(user closed modal|accounts received is empty)/i.test(t.message))throw new eh.ab(t);throw t}}async disconnect(){if(!(0,ec.ac)(this,s))return;let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){let t=await this.getProvider(),e=await t.request({method:"eth_accounts"});return(0,eu.K)(e[0])}async getChainId(){let t=await this.getProvider();return(0,el.J)(t.chainId)}async getProvider(){if(!(0,ec.ac)(this,s)){let t=(await Promise.all([r.e(775),r.e(439)]).then(r.t.bind(r,64775,19))).default;"function"!=typeof t&&"function"==typeof t.default&&(t=t.default),(0,ec.qx)(this,a,new t(this.options));let e=ec.ac(this,a).walletExtension?.getChainId(),i=this.chains.find(t=>this.options.chainId?t.id===this.options.chainId:t.id===e)||this.chains[0],o=this.options.chainId||i?.id,n=this.options.jsonRpcUrl||i?.rpcUrls.default.http[0];(0,ec.qx)(this,s,(0,ec.ac)(this,a).makeWeb3Provider(n,o))}return(0,ec.ac)(this,s)}async getWalletClient({chainId:t}={}){let[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(e=>e.id===t);if(!e)throw Error("provider is required.");return(0,ed.K)({account:r,chain:i,transport:(0,ef.P)(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){let e=await this.getProvider(),r=(0,ep.eC)(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(e=>e.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){let i=this.chains.find(e=>e.id===t);if(!i)throw new es.B({chainId:t,connectorId:this.id});if(4902===o.code)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(t){throw new eh.ab(t)}throw new eh.x3(o)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:i}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:i}}})}};function ew(t=[],e=[]){return[...new Set([...t,...e])]}a=new WeakMap,s=new WeakMap,r(51040),r(20342),r(35077),r(87853),r(38195),r(71188),r(58619),r(849),r(36073),r(43824),r(43869),r(62601),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var eb=Object.defineProperty,em=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,ey=Object.getOwnPropertySymbols,ex=Object.prototype.hasOwnProperty,eC=Object.prototype.propertyIsEnumerable,eE=(t,e,r)=>e in t?eb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,e_=(t,e)=>{for(var r in e||(e={}))ex.call(e,r)&&eE(t,r,e[r]);if(ey)for(var r of ey(e))eC.call(e,r)&&eE(t,r,e[r]);return t},eD=(t,e)=>em(t,ev(e));function e$(t){return t.includes(":")}function ek(t){var e,r,i;let o={};if(!(Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length))return o;for(let[n,a]of Object.entries(t)){let t=e$(n)?[n]:a.chains,s=a.methods||[],l=a.events||[],c=e$(n)?n.split(":")[0]:n;o[c]=eD(e_({},o[c]),{chains:ew(t,null==(e=o[c])?void 0:e.chains),methods:ew(s,null==(r=o[c])?void 0:r.methods),events:ew(l,null==(i=o[c])?void 0:i.events)})}return o}var eA="eip155",eS="requestedChains",eO="wallet_addEthereumChain",eI=class extends ec.wR{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,ec.Ko)(this,u),(0,ec.Ko)(this,d),(0,ec.Ko)(this,p),(0,ec.Ko)(this,w),(0,ec.Ko)(this,m),(0,ec.Ko)(this,y),(0,ec.Ko)(this,C),(0,ec.Ko)(this,_),(0,ec.Ko)(this,$),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,ec.Ko)(this,l,void 0),(0,ec.Ko)(this,c,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,eu.K)(t[0])})},this.onChainChanged=t=>{let e=Number(t),r=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:r}})},this.onDisconnect=()=>{(0,ec.U9)(this,y,x).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},(0,ec.U9)(this,u,h).call(this)}async connect({chainId:t,pairingTopic:e}={}){try{let r=t;if(!r){let t=this.storage?.getItem("store"),e=t?.state?.data?.chain?.id;r=e&&!this.isChainUnsupported(e)?e:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let i=await this.getProvider();(0,ec.U9)(this,w,b).call(this);let o=(0,ec.U9)(this,p,g).call(this);if(i.session&&o&&await i.disconnect(),!i.session||o){let t=this.chains.filter(t=>t.id!==r).map(t=>t.id);this.emit("message",{type:"connecting"}),await i.connect({pairingTopic:e,optionalChains:[r,...t]}),(0,ec.U9)(this,y,x).call(this,this.chains.map(({id:t})=>t))}let n=await i.enable(),a=(0,eu.K)(n[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:l}}}catch(t){if(/user rejected/i.test(t?.message))throw new eh.ab(t);throw t}}async disconnect(){let t=await this.getProvider();try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,ec.U9)(this,m,v).call(this),(0,ec.U9)(this,y,x).call(this,[])}}async getAccount(){let{accounts:t}=await this.getProvider();return(0,eu.K)(t[0])}async getChainId(){let{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return(0,ec.ac)(this,l)||await (0,ec.U9)(this,u,h).call(this),t&&await this.switchChain(t),(0,ec.ac)(this,l)}async getWalletClient({chainId:t}={}){let[e,r]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),i=this.chains.find(e=>e.id===t);if(!e)throw Error("provider is required.");return(0,ed.K)({account:r,chain:i,transport:(0,ef.P)(e)})}async isAuthorized(){try{let[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,ec.U9)(this,p,g).call(this);if(!t)return!1;if(r&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){let e=this.chains.find(e=>e.id===t);if(!e)throw new eh.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),i=(0,ec.U9)(this,_,D).call(this),o=(0,ec.U9)(this,$,k).call(this);if(!i.includes(t)&&o.includes(eO)){await r.request({method:eO,params:[{chainId:(0,ep.eC)(e.id),blockExplorerUrls:[e.blockExplorers?.default?.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});let i=(0,ec.U9)(this,C,E).call(this);i.push(t),(0,ec.U9)(this,y,x).call(this,i)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,ep.eC)(t)}]}),e}catch(e){let t="string"==typeof e?e:e?.message;if(/user rejected request/i.test(t))throw new eh.ab(e);throw new eh.x3(e)}}};l=new WeakMap,c=new WeakMap,u=new WeakSet,h=async function(){return(0,ec.ac)(this,c)||"undefined"==typeof window||(0,ec.qx)(this,c,(0,ec.U9)(this,d,f).call(this)),(0,ec.ac)(this,c)},d=new WeakSet,f=async function(){let{EthereumProvider:t}=await r.e(256).then(r.bind(r,37256)),e=this.chains.map(({id:t})=>t);if(e.length){let{projectId:r,showQrModal:i=!0,qrModalOptions:o,metadata:n,relayUrl:a}=this.options;(0,ec.qx)(this,l,await t.init({showQrModal:i,qrModalOptions:o,projectId:r,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(t=>[t.id,t.rpcUrls.default.http[0]])),metadata:n,relayUrl:a}))}},p=new WeakSet,g=function(){if((0,ec.U9)(this,$,k).call(this).includes(eO)||!this.options.isNewChainsStale)return!1;let t=(0,ec.U9)(this,C,E).call(this),e=this.chains.map(({id:t})=>t),r=(0,ec.U9)(this,_,D).call(this);return(!r.length||!!r.some(t=>e.includes(t)))&&!e.every(e=>t.includes(e))},w=new WeakSet,b=function(){(0,ec.ac)(this,l)&&((0,ec.U9)(this,m,v).call(this),(0,ec.ac)(this,l).on("accountsChanged",this.onAccountsChanged),(0,ec.ac)(this,l).on("chainChanged",this.onChainChanged),(0,ec.ac)(this,l).on("disconnect",this.onDisconnect),(0,ec.ac)(this,l).on("session_delete",this.onDisconnect),(0,ec.ac)(this,l).on("display_uri",this.onDisplayUri),(0,ec.ac)(this,l).on("connect",this.onConnect))},m=new WeakSet,v=function(){(0,ec.ac)(this,l)&&((0,ec.ac)(this,l).removeListener("accountsChanged",this.onAccountsChanged),(0,ec.ac)(this,l).removeListener("chainChanged",this.onChainChanged),(0,ec.ac)(this,l).removeListener("disconnect",this.onDisconnect),(0,ec.ac)(this,l).removeListener("session_delete",this.onDisconnect),(0,ec.ac)(this,l).removeListener("display_uri",this.onDisplayUri),(0,ec.ac)(this,l).removeListener("connect",this.onConnect))},y=new WeakSet,x=function(t){this.storage?.setItem(eS,t)},C=new WeakSet,E=function(){return this.storage?.getItem(eS)??[]},_=new WeakSet,D=function(){if(!(0,ec.ac)(this,l))return[];let t=ec.ac(this,l).session?.namespaces;if(!t)return[];let e=ek(t);return e[eA]?.chains?.map(t=>parseInt(t.split(":")[1]||""))??[]},$=new WeakSet,k=function(){if(!(0,ec.ac)(this,l))return[];let t=ec.ac(this,l).session?.namespaces;if(!t)return[];let e=ek(t);return e[eA]?.methods??[]};let eT=O.j1.getBlockchainApiUrl();function eR({projectId:t,chains:e,metadata:r}){let{publicClient:i}=(0,A.QB)(e,[function({projectId:t}){return function(e){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(e.id))return null;let r=`${eT}/v1/?chainId=${t6.EIP155}:${e.id}&projectId=${t}`;return{chain:{...e,rpcUrls:{...e.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:t}),function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}]);return(0,ea._g)({autoConnect:!0,connectors:[new eI({chains:e,options:{projectId:t,showQrModal:!1,metadata:r}}),new eo({chains:e}),new et._({chains:e,options:{shimDisconnect:!0}}),new eg({chains:e,options:{appName:r?.name??"Unknown"}})],publicClient:i})}function eN(t){return i||(i=new t9({...t,_sdkVersion:`react-wagmi-${t6.VERSION}`})),i}},50741:function(t,e,r){"use strict";r.d(e,{E:function(){return o}});var i=r(7541);function o(t=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,i.P)(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}},72281:function(t,e,r){"use strict";r.d(e,{z:function(){return n}});var i=r(50741),o=r(7541);function n(t,e){e||(e=t.reduce((t,e)=>t+e.length,0));let r=(0,i.E)(e),n=0;for(let e of t)r.set(e,n),n+=e.length;return(0,o.P)(r)}},34901:function(t,e,r){"use strict";r.d(e,{m:function(){return n}});var i=r(85418),o=r(7541);function n(t,e="utf8"){let r=i.Z[e];if(!r)throw Error(`Unsupported encoding "${e}"`);return("utf8"===e||"utf-8"===e)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,o.P)(globalThis.Buffer.from(t,"utf-8")):r.decoder.decode(`${r.prefix}${t}`)}},71188:function(t,e,r){"use strict";r.d(e,{BB:function(){return n.B},mL:function(){return o.m},zo:function(){return i.z}});var i=r(72281),o=r(34901),n=r(21361)},21361:function(t,e,r){"use strict";r.d(e,{B:function(){return o}});var i=r(85418);function o(t,e="utf8"){let r=i.Z[e];if(!r)throw Error(`Unsupported encoding "${e}"`);return("utf8"===e||"utf-8"===e)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):r.encoder.encode(t).substring(1)}},7541:function(t,e,r){"use strict";function i(t){return null!=globalThis.Buffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}r.d(e,{P:function(){return i}})},85418:function(t,e,r){"use strict";r.d(e,{Z:function(){return tV}});var i={};r.r(i),r.d(i,{identity:function(){return T}});var o={};r.r(o),r.d(o,{base2:function(){return R}});var n={};r.r(n),r.d(n,{base8:function(){return N}});var a={};r.r(a),r.d(a,{base10:function(){return P}});var s={};r.r(s),r.d(s,{base16:function(){return U},base16upper:function(){return B}});var l={};r.r(l),r.d(l,{base32:function(){return M},base32hex:function(){return W},base32hexpad:function(){return F},base32hexpadupper:function(){return Z},base32hexupper:function(){return H},base32pad:function(){return j},base32padupper:function(){return z},base32upper:function(){return L},base32z:function(){return V}});var c={};r.r(c),r.d(c,{base36:function(){return q},base36upper:function(){return K}});var u={};r.r(u),r.d(u,{base58btc:function(){return Y},base58flickr:function(){return G}});var h={};r.r(h),r.d(h,{base64:function(){return X},base64pad:function(){return J},base64url:function(){return Q},base64urlpad:function(){return tt}});var d={};r.r(d),r.d(d,{base256emoji:function(){return to}});var f={};r.r(f),r.d(f,{sha256:function(){return tw},sha512:function(){return tb}});var p={};r.r(p),r.d(p,{identity:function(){return tm}});var g={};r.r(g),r.d(g,{code:function(){return ty},decode:function(){return tC},encode:function(){return tx},name:function(){return tv}});var w={};r.r(w),r.d(w,{code:function(){return t$},decode:function(){return tA},encode:function(){return tk},name:function(){return tD}});var b=function(t,e){if(t.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var o=0;o<t.length;o++){var n=t.charAt(o),a=n.charCodeAt(0);if(255!==r[a])throw TypeError(n+" is ambiguous");r[a]=o}var s=t.length,l=t.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function h(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[0]){for(var i=0,o=0;t[e]===l;)i++,e++;for(var n=(t.length-e)*c+1>>>0,a=new Uint8Array(n);t[e];){var u=r[t.charCodeAt(e)];if(255===u)return;for(var h=0,d=n-1;(0!==u||h<o)&&-1!==d;d--,h++)u+=s*a[d]>>>0,a[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");o=h,e++}if(" "!==t[e]){for(var f=n-o;f!==n&&0===a[f];)f++;for(var p=new Uint8Array(i+(n-f)),g=i;f!==n;)p[g++]=a[f++];return p}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,i=0,o=0,n=e.length;o!==n&&0===e[o];)o++,r++;for(var a=(n-o)*u+1>>>0,c=new Uint8Array(a);o!==n;){for(var h=e[o],d=0,f=a-1;(0!==h||d<i)&&-1!==f;f--,d++)h+=256*c[f]>>>0,c[f]=h%s>>>0,h=h/s>>>0;if(0!==h)throw Error("Non-zero carry");i=d,o++}for(var p=a-i;p!==a&&0===c[p];)p++;for(var g=l.repeat(r);p<a;++p)g+=t.charAt(c[p]);return g},decodeUnsafe:h,decode:function(t){var r=h(t);if(r)return r;throw Error(`Non-${e} character`)}}};new Uint8Array(0);let m=(t,e)=>{if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0},v=t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw Error("Unknown type, must be binary type")},y=t=>new TextEncoder().encode(t),x=t=>new TextDecoder().decode(t);class C{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class E{constructor(t,e,r){if(this.name=t,this.prefix=e,void 0===e.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=e.codePointAt(0),this.baseDecode=r}decode(t){if("string"==typeof t){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(t){return D(this,t)}}class _{constructor(t){this.decoders=t}or(t){return D(this,t)}decode(t){let e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let D=(t,e)=>new _({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class ${constructor(t,e,r,i){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=i,this.encoder=new C(t,e,r),this.decoder=new E(t,e,i)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}let k=({name:t,prefix:e,encode:r,decode:i})=>new $(t,e,r,i),A=({prefix:t,name:e,alphabet:r})=>{let{encode:i,decode:o}=b(r,e);return k({prefix:t,name:e,encode:i,decode:t=>v(o(t))})},S=(t,e,r,i)=>{let o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let n=t.length;for(;"="===t[n-1];)--n;let a=new Uint8Array(n*r/8|0),s=0,l=0,c=0;for(let e=0;e<n;++e){let n=o[t[e]];if(void 0===n)throw SyntaxError(`Non-${i} character`);l=l<<r|n,(s+=r)>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return a},O=(t,e,r)=>{let i="="===e[e.length-1],o=(1<<r)-1,n="",a=0,s=0;for(let i=0;i<t.length;++i)for(s=s<<8|t[i],a+=8;a>r;)a-=r,n+=e[o&s>>a];if(a&&(n+=e[o&s<<r-a]),i)for(;n.length*r&7;)n+="=";return n},I=({name:t,prefix:e,bitsPerChar:r,alphabet:i})=>k({prefix:e,name:t,encode:t=>O(t,i,r),decode:e=>S(e,i,r,t)}),T=k({prefix:"\x00",name:"identity",encode:t=>x(t),decode:t=>y(t)}),R=I({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),N=I({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),P=A({prefix:"9",name:"base10",alphabet:"0123456789"}),U=I({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),B=I({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),M=I({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),L=I({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),j=I({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),z=I({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),W=I({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),H=I({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),F=I({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Z=I({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),V=I({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),q=A({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),K=A({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Y=A({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),G=A({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),X=I({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),J=I({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Q=I({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),tt=I({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),te=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),tr=te.reduce((t,e,r)=>(t[r]=e,t),[]),ti=te.reduce((t,e,r)=>(t[e.codePointAt(0)]=r,t),[]),to=k({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(t){return t.reduce((t,e)=>t+=tr[e],"")},decode:function(t){let e=[];for(let r of t){let t=ti[r.codePointAt(0)];if(void 0===t)throw Error(`Non-base256emoji character: ${r}`);e.push(t)}return new Uint8Array(e)}});var tn={encode:function t(e,r,i){r=r||[];for(var o=i=i||0;e>=2147483648;)r[i++]=255&e|128,e/=128;for(;-128&e;)r[i++]=255&e|128,e>>>=7;return r[i]=0|e,t.bytes=i-o+1,r},decode:function t(e,r){var i,o=0,r=r||0,n=0,a=r,s=e.length;do{if(a>=s)throw t.bytes=0,RangeError("Could not decode varint");i=e[a++],o+=n<28?(127&i)<<n:(127&i)*Math.pow(2,n),n+=7}while(i>=128);return t.bytes=a-r,o},encodingLength:function(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:t<34359738368?5:t<4398046511104?6:t<562949953421312?7:t<72057594037927940?8:t<0x7fffffffffffffff?9:10}};let ta=(t,e=0)=>[tn.decode(t,e),tn.decode.bytes],ts=(t,e,r=0)=>(tn.encode(t,e,r),e),tl=t=>tn.encodingLength(t),tc=(t,e)=>{let r=e.byteLength,i=tl(t),o=i+tl(r),n=new Uint8Array(o+r);return ts(t,n,0),ts(r,n,i),n.set(e,o),new td(t,r,e,n)},tu=t=>{let e=v(t),[r,i]=ta(e),[o,n]=ta(e.subarray(i)),a=e.subarray(i+n);if(a.byteLength!==o)throw Error("Incorrect length");return new td(r,o,a,e)},th=(t,e)=>t===e||t.code===e.code&&t.size===e.size&&m(t.bytes,e.bytes);class td{constructor(t,e,r,i){this.code=t,this.size=e,this.digest=r,this.bytes=i}}let tf=({name:t,code:e,encode:r})=>new tp(t,e,r);class tp{constructor(t,e,r){this.name=t,this.code=e,this.encode=r}digest(t){if(t instanceof Uint8Array){let e=this.encode(t);return e instanceof Uint8Array?tc(this.code,e):e.then(t=>tc(this.code,t))}throw Error("Unknown type, must be binary type")}}let tg=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),tw=tf({name:"sha2-256",code:18,encode:tg("SHA-256")}),tb=tf({name:"sha2-512",code:19,encode:tg("SHA-512")}),tm={code:0,name:"identity",encode:v,digest:t=>tc(0,v(t))},tv="raw",ty=85,tx=t=>v(t),tC=t=>v(t),tE=new TextEncoder,t_=new TextDecoder,tD="json",t$=512,tk=t=>tE.encode(JSON.stringify(t)),tA=t=>JSON.parse(t_.decode(t));class tS{constructor(t,e,r,i){this.code=e,this.version=t,this.multihash=r,this.bytes=i,this.byteOffset=i.byteOffset,this.byteLength=i.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:tM,byteLength:tM,code:tB,version:tB,multihash:tB,bytes:tB,_baseCache:tM,asCID:tM})}toV0(){if(0===this.version)return this;{let{code:t,multihash:e}=this;if(t!==tR)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(e.code!==tN)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return tS.createV0(e)}}toV1(){switch(this.version){case 0:{let{code:t,digest:e}=this.multihash,r=tc(t,e);return tS.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&th(this.multihash,t.multihash)}toString(t){let{bytes:e,version:r,_baseCache:i}=this;return 0===r?tI(e,i,t||Y.encoder):tT(e,i,t||M.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return tL(/^0\.0/,tj),!!(t&&(t[tU]||t.asCID===t))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof tS)return t;if(null!=t&&t.asCID===t){let{version:e,code:r,multihash:i,bytes:o}=t;return new tS(e,r,i,o||tP(e,r,i.bytes))}if(null==t||!0!==t[tU])return null;{let{version:e,multihash:r,code:i}=t,o=tu(r);return tS.create(e,i,o)}}static create(t,e,r){if("number"!=typeof e)throw Error("String codecs are no longer supported");switch(t){case 0:if(e===tR)return new tS(t,e,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${tR}) block encoding`);case 1:{let i=tP(t,e,r.bytes);return new tS(t,e,r,i)}default:throw Error("Invalid version")}}static createV0(t){return tS.create(0,tR,t)}static createV1(t,e){return tS.create(1,t,e)}static decode(t){let[e,r]=tS.decodeFirst(t);if(r.length)throw Error("Incorrect length");return e}static decodeFirst(t){let e=tS.inspectBytes(t),r=e.size-e.multihashSize,i=v(t.subarray(r,r+e.multihashSize));if(i.byteLength!==e.multihashSize)throw Error("Incorrect length");let o=i.subarray(e.multihashSize-e.digestSize),n=new td(e.multihashCode,e.digestSize,o,i);return[0===e.version?tS.createV0(n):tS.createV1(e.codec,n),t.subarray(e.size)]}static inspectBytes(t){let e=0,r=()=>{let[r,i]=ta(t.subarray(e));return e+=i,r},i=r(),o=tR;if(18===i?(i=0,e=0):1===i&&(o=r()),0!==i&&1!==i)throw RangeError(`Invalid CID version ${i}`);let n=e,a=r(),s=r(),l=e+s;return{version:i,codec:o,multihashCode:a,digestSize:s,multihashSize:l-n,size:l}}static parse(t,e){let[r,i]=tO(t,e),o=tS.decode(i);return o._baseCache.set(r,t),o}}let tO=(t,e)=>{switch(t[0]){case"Q":return[Y.prefix,(e||Y).decode(`${Y.prefix}${t}`)];case Y.prefix:return[Y.prefix,(e||Y).decode(t)];case M.prefix:return[M.prefix,(e||M).decode(t)];default:if(null==e)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],e.decode(t)]}},tI=(t,e,r)=>{let{prefix:i}=r;if(i!==Y.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let o=e.get(i);if(null!=o)return o;{let o=r.encode(t).slice(1);return e.set(i,o),o}},tT=(t,e,r)=>{let{prefix:i}=r,o=e.get(i);if(null!=o)return o;{let o=r.encode(t);return e.set(i,o),o}},tR=112,tN=18,tP=(t,e,r)=>{let i=tl(t),o=i+tl(e),n=new Uint8Array(o+r.byteLength);return ts(t,n,0),ts(e,n,i),n.set(r,o),n},tU=Symbol.for("@ipld/js-cid/CID"),tB={writable:!1,configurable:!1,enumerable:!0},tM={writable:!1,enumerable:!1,configurable:!1},tL=(t,e)=>{if(t.test("0.0.0-dev"))console.warn(e);else throw Error(e)},tj=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,tz={...i,...o,...n,...a,...s,...l,...c,...u,...h,...d};({...f,...p});var tW=r(50741);function tH(t,e,r,i){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:i}}}let tF=tH("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),tZ=tH("ascii","a",t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},t=>{t=t.substring(1);let e=(0,tW.E)(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e});var tV={utf8:tF,"utf-8":tF,hex:tz.base16,latin1:tZ,ascii:tZ,binary:tZ,...tz}},53722:function(t,e,r){"use strict";r.d(e,{sj:function(){return f},iH:function(){return w},CO:function(){return g},Ld:function(){return p}}),Symbol();let i=Symbol(),o=Object.getPrototypeOf,n=new WeakMap,a=t=>t&&(n.has(t)?n.get(t):o(t)===Object.prototype||o(t)===Array.prototype),s=t=>a(t)&&t[i]||null,l=(t,e=!0)=>{n.set(t,e)},c=t=>"object"==typeof t&&null!==t,u=new WeakMap,h=new WeakSet,[d]=((t=Object.is,e=(t,e)=>new Proxy(t,e),r=t=>c(t)&&!h.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),i=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},o=new WeakMap,n=(t,e,r=i)=>{let a=o.get(t);if((null==a?void 0:a[0])===e)return a[1];let s=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return l(s,!0),o.set(t,[e,s]),Reflect.ownKeys(t).forEach(e=>{if(Object.getOwnPropertyDescriptor(s,e))return;let i=Reflect.get(t,e),o={value:i,enumerable:!0,configurable:!0};if(h.has(i))l(i,!1);else if(i instanceof Promise)delete o.value,o.get=()=>r(i);else if(u.has(i)){let[t,e]=u.get(i);o.value=n(t,e(),r)}Object.defineProperty(s,e,o)}),Object.preventExtensions(s)},a=new WeakMap,d=[1,1],f=i=>{if(!c(i))throw Error("object required");let o=a.get(i);if(o)return o;let l=d[0],p=new Set,g=(t,e=++d[0])=>{l!==e&&(l=e,p.forEach(r=>r(t,e)))},w=d[1],b=(t=++d[1])=>(w===t||p.size||(w=t,v.forEach(([e])=>{let r=e[1](t);r>l&&(l=r)})),l),m=t=>(e,r)=>{let i=[...e];i[1]=[t,...i[1]],g(i,r)},v=new Map,y=(t,e)=>{if(v.has(t))throw Error("prop listener already exists");if(p.size){let r=e[3](m(t));v.set(t,[e,r])}else v.set(t,[e])},x=t=>{var e;let r=v.get(t);r&&(v.delete(t),null==(e=r[1])||e.call(r))},C=t=>{p.add(t),1===p.size&&v.forEach(([t,e],r)=>{if(e)throw Error("remove already exists");let i=t[3](m(r));v.set(r,[t,i])});let e=()=>{p.delete(t),0===p.size&&v.forEach(([t,e],r)=>{e&&(e(),v.set(r,[t]))})};return e},E=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),_={deleteProperty(t,e){let r=Reflect.get(t,e);x(e);let i=Reflect.deleteProperty(t,e);return i&&g(["delete",[e],r]),i},set(e,i,o,n){let l=Reflect.has(e,i),d=Reflect.get(e,i,n);if(l&&(t(d,o)||a.has(o)&&t(d,a.get(o))))return!0;x(i),c(o)&&(o=s(o)||o);let p=o;if(o instanceof Promise)o.then(t=>{o.status="fulfilled",o.value=t,g(["resolve",[i],t])}).catch(t=>{o.status="rejected",o.reason=t,g(["reject",[i],t])});else{!u.has(o)&&r(o)&&(p=f(o));let t=!h.has(p)&&u.get(p);t&&y(i,t)}return Reflect.set(e,i,p,n),g(["set",[i],o,d]),!0}},D=e(E,_);a.set(i,D);let $=[E,b,n,C];return u.set(D,$),Reflect.ownKeys(i).forEach(t=>{let e=Object.getOwnPropertyDescriptor(i,t);"value"in e&&(D[t]=i[t],delete e.value,delete e.writable),Object.defineProperty(E,t,e)}),D})=>[f,u,h,t,e,r,i,o,n,a,d])();function f(t={}){return d(t)}function p(t,e,r){let i;let o=u.get(t);o||console.warn("Please use proxy object");let n=[],a=o[3],s=!1,l=a(t=>{if(n.push(t),r){e(n.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&e(n.splice(0))}))});return s=!0,()=>{s=!1,l()}}function g(t,e){let r=u.get(t);r||console.warn("Please use proxy object");let[i,o,n]=r;return n(i,o(),e)}function w(t){return h.add(t),t}},14576:function(t,e,r){"use strict";r.d(e,{y:function(){return i}});let i=(0,r(71186).a)({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}})},88301:function(t,e,r){"use strict";r.d(e,{e:function(){return i}});let i=(0,r(71186).a)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}})},27833:function(t,e,r){"use strict";r.d(e,{c:function(){return i}});let i=(0,r(71186).a)({id:31337,name:"Hardhat",network:"hardhat",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}}})},73167:function(t,e,r){"use strict";r.d(e,{d:function(){return i}});let i=(0,r(71186).a)({id:1337,name:"Localhost",network:"localhost",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}}})}}]);