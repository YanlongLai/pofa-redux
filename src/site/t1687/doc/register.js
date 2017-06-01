 var docConfig = [
	 {"id" : "#register","code":"JM001",
	 "contentZh":"PHVsPgoJCQkJPGxpPuWcqOW8gOaIt+WQjui/m+ihjOS4gOasoeacieaViOWtmOasvu+8jOaBreWWnOaCqOaIkOS4uua1i+ivleS4k+eUqOacieaViOS8muWRmO+8gTwvbGk+CgkJCQk8bGk+5a2Y5qy+5YWN5omL57ut6LS577yM5byA5oi35pyA5L2O5YWl5qy+6YeR6aKdMTAw5Lq65rCR5biB44CCPC9saT4KCQkJCTxsaT7mtYvor5XkuJPnlKjkuKXnpoHkvJrlkZjmnInph43lpI3nlLPor7fotKblj7fooYzkuLrvvIzmr4/kvY3njqnlrrbjgIHmr4/kuIDkvY/lnYAKCQkJCQnjgIHmr4/kuIDnlLXlrZDpgq7nrrHjgIHmr4/kuIDnlLXor53lj7fnoIHjgIHnm7jlkIzmlK/ku5jljaEv5L+h55So5Y2h5Y+356CB77yM5Y+K5YWx5Lqr6K6h566X5py6546v5aKDKOS+i+Wmgue9keWQp+OAgeWFtuS7luWFrOWFseeUqOiuoeeul+acuuetiSnlj6rog73mi6XmnInkuIDkuKrluJDmiLfmlbDmja7jgII8L2xpPgoJCQkJPGxpPua1i+ivleS4k+eUqOaYr+aPkOS+m+S6kuiBlOe9keaKleazqOacjeWKoeeahOacuuaehOOAguivt+S8muWRmOWcqOazqOWGjOWJjeWPguiAg+W9k+WcsOaUv+W6nOeahOazleW+i++8jOWcqOWNmuW9qeS4jeiiq+WFgeiuuOeahOWcsOWMuu+8jOWmguacieS8muWRmOWcqOa1i+ivleS4k+eUqOazqOWGjOOAgeS4i+azqO+8jOS4uuS8muWRmOS4quS6uuihjOS4uu+8jOa1i+ivleS4k+eUqOS4jei0n+i0o+OAgeaJv+aLheS7u+S9leebuOWFs+i0o+S7u+OAgjwvbGk+CgkJCQk8bGk+5peg6K665piv5Liq5Lq65oiW5piv5Zui5L2T77yM5aaC5pyJ5Lu75L2V5aiB6IOB44CB5rul55So5rWL6K+V5LiT55So5ZCN5LmJ55qE6KGM5Li677yM5rWL6K+V5LiT55So5L+d55WZ5p2I5Yip5Y+W5raI44CB5pS25Zue546p5a626LSm5Y+344CCPC9saT4KCQkJCTxsaT7njqnlrrbms6jlhozkv6Hmga/mnInkuonorq7ml7bvvIzkuLrnoa7kv53lj4zmlrnliKnnm4rjgIHmnZznu53ouqvku73nm5fnlKjooYzkuLrvvIzmtYvor5XkuJPnlKjkv53nlZnmnYPliKnopoHmsYLlrqLmiLflkJHmiJHku6zmj5DkvpvlhYXotrPmnInmlYjnmoTmoaPvvIzlubbku6XlkITnp43mlrnlvI/ovqjliKvlrqLmiLfmmK/lkKbnrKblkIjotYTmoLzkuqvmnInmiJHku6znmoTku7vkvZXkvJjmg6DjgII8L2xpPgoJCQkJPGxpIGNsYXNzPSJyZWQiPuacrOWFrOWPuOaYr+S9v+eUqEJH5omA5o+Q5L6b55qE5Zyo57q/5aix5LmQ6L2v5Lu277yM6Iul5Y+R546w5oKo5Zyo5ZCM57O757uf55qE5aix5LmQ5Zy65LiK5byA6K6+5aSa5Liq5Lya5ZGY6LSm5oi377yM5bm26L+b6KGM5aWX5Yip5LiL5rOo77yb5pys5YWs5Y+45pyJ5p2D5Y+W5raI5oKo55qE5Lya5ZGY6LSm5Y+35bm25bCG5omA5pyJ5LiL5rOo6JCl5Yip5Y+W5raI77yBPC9saT4KCQkJPC91bD4=",
	 "contentTw":"5Zyo5byA5oi35ZCO6L+b6KGM5LiA5qyh5pyJ5pWI5a2Y5qy+77yM5oGt5Zac5oKo5oiQ5Li65rWL6K+V5LiT55So5pyJ5pWI5Lya5ZGY77yBCuWtmOasvuWFjeaJi+e7rei0ue+8jOW8gOaIt+acgOS9juWFpeasvumHkeminTEwMOS6uuawkeW4geOAggrmtYvor5XkuJPnlKjkuKXnpoHkvJrlkZjmnInph43lpI3nlLPor7fotKblj7fooYzkuLrvvIzmr4/kvY3njqnlrrbjgIHmr4/kuIDkvY/lnYAg44CB5q+P5LiA55S15a2Q6YKu566x44CB5q+P5LiA55S16K+d5Y+356CB44CB55u45ZCM5pSv5LuY5Y2hL+S/oeeUqOWNoeWPt+egge+8jOWPiuWFseS6q+iuoeeul+acuueOr+WigyjkvovlpoLnvZHlkKfjgIHlhbbku5blhazlhbHnlKjorqHnrpfmnLrnrYkp5Y+q6IO95oul5pyJ5LiA5Liq5biQ5oi35pWw5o2u44CCCua1i+ivleS4k+eUqOaYr+aPkOS+m+S6kuiBlOe9keaKleazqOacjeWKoeeahOacuuaehOOAguivt+S8muWRmOWcqOazqOWGjOWJjeWPguiAg+W9k+WcsOaUv+W6nOeahOazleW+i++8jOWcqOWNmuW9qeS4jeiiq+WFgeiuuOeahOWcsOWMuu+8jOWmguacieS8muWRmOWcqOa1i+ivleS4k+eUqOazqOWGjOOAgeS4i+azqO+8jOS4uuS8muWRmOS4quS6uuihjOS4uu+8jOa1i+ivleS4k+eUqOS4jei0n+i0o+OAgeaJv+aLheS7u+S9leebuOWFs+i0o+S7u+OAggrml6DorrrmmK/kuKrkurrmiJbmmK/lm6LkvZPvvIzlpoLmnInku7vkvZXlqIHog4HjgIHmu6XnlKjmtYvor5XkuJPnlKjlkI3kuYnnmoTooYzkuLrvvIzmtYvor5XkuJPnlKjkv53nlZnmnYjliKnlj5bmtojjgIHmlLblm57njqnlrrbotKblj7fjgIIK546p5a625rOo5YaM5L+h5oGv5pyJ5LqJ6K6u5pe277yM5Li656Gu5L+d5Y+M5pa55Yip55uK44CB5p2c57ud6Lqr5Lu955uX55So6KGM5Li677yM5rWL6K+V5LiT55So5L+d55WZ5p2D5Yip6KaB5rGC5a6i5oi35ZCR5oiR5Lus5o+Q5L6b5YWF6Laz5pyJ5pWI55qE5qGj77yM5bm25Lul5ZCE56eN5pa55byP6L6o5Yir5a6i5oi35piv5ZCm56ym5ZCI6LWE5qC85Lqr5pyJ5oiR5Lus55qE5Lu75L2V5LyY5oOg44CCCuacrOWFrOWPuOaYr+S9v+eUqExFQk/miYDmj5DkvpvnmoTlnKjnur/lqLHkuZDova/ku7bvvIzoi6Xlj5HnjrDmgqjlnKjlkIzns7vnu5/nmoTlqLHkuZDlnLrkuIrlvIDorr7lpJrkuKrkvJrlkZjotKbmiLfvvIzlubbov5vooYzlpZfliKnkuIvms6jvvJvmnKzlhazlj7jmnInmnYPlj5bmtojmgqjnmoTkvJrlkZjotKblj7flubblsIbmiYDmnInkuIvms6jokKXliKnlj5bmtojvvIE=",
	 "contentEn":"5Zyo5byA5oi35ZCO6L+b6KGM5LiA5qyh5pyJ5pWI5a2Y5qy+77yM5oGt5Zac5oKo5oiQ5Li65rWL6K+V5LiT55So5pyJ5pWI5Lya5ZGY77yBCuWtmOasvuWFjeaJi+e7rei0ue+8jOW8gOaIt+acgOS9juWFpeasvumHkeminTEwMOS6uuawkeW4geOAggrmtYvor5XkuJPnlKjkuKXnpoHkvJrlkZjmnInph43lpI3nlLPor7fotKblj7fooYzkuLrvvIzmr4/kvY3njqnlrrbjgIHmr4/kuIDkvY/lnYAg44CB5q+P5LiA55S15a2Q6YKu566x44CB5q+P5LiA55S16K+d5Y+356CB44CB55u45ZCM5pSv5LuY5Y2hL+S/oeeUqOWNoeWPt+egge+8jOWPiuWFseS6q+iuoeeul+acuueOr+WigyjkvovlpoLnvZHlkKfjgIHlhbbku5blhazlhbHnlKjorqHnrpfmnLrnrYkp5Y+q6IO95oul5pyJ5LiA5Liq5biQ5oi35pWw5o2u44CCCua1i+ivleS4k+eUqOaYr+aPkOS+m+S6kuiBlOe9keaKleazqOacjeWKoeeahOacuuaehOOAguivt+S8muWRmOWcqOazqOWGjOWJjeWPguiAg+W9k+WcsOaUv+W6nOeahOazleW+i++8jOWcqOWNmuW9qeS4jeiiq+WFgeiuuOeahOWcsOWMuu+8jOWmguacieS8muWRmOWcqOa1i+ivleS4k+eUqOazqOWGjOOAgeS4i+azqO+8jOS4uuS8muWRmOS4quS6uuihjOS4uu+8jOa1i+ivleS4k+eUqOS4jei0n+i0o+OAgeaJv+aLheS7u+S9leebuOWFs+i0o+S7u+OAggrml6DorrrmmK/kuKrkurrmiJbmmK/lm6LkvZPvvIzlpoLmnInku7vkvZXlqIHog4HjgIHmu6XnlKjmtYvor5XkuJPnlKjlkI3kuYnnmoTooYzkuLrvvIzmtYvor5XkuJPnlKjkv53nlZnmnYjliKnlj5bmtojjgIHmlLblm57njqnlrrbotKblj7fjgIIK546p5a625rOo5YaM5L+h5oGv5pyJ5LqJ6K6u5pe277yM5Li656Gu5L+d5Y+M5pa55Yip55uK44CB5p2c57ud6Lqr5Lu955uX55So6KGM5Li677yM5rWL6K+V5LiT55So5L+d55WZ5p2D5Yip6KaB5rGC5a6i5oi35ZCR5oiR5Lus5o+Q5L6b5YWF6Laz5pyJ5pWI55qE5qGj77yM5bm25Lul5ZCE56eN5pa55byP6L6o5Yir5a6i5oi35piv5ZCm56ym5ZCI6LWE5qC85Lqr5pyJ5oiR5Lus55qE5Lu75L2V5LyY5oOg44CCCuacrOWFrOWPuOaYr+S9v+eUqExFQk/miYDmj5DkvpvnmoTlnKjnur/lqLHkuZDova/ku7bvvIzoi6Xlj5HnjrDmgqjlnKjlkIzns7vnu5/nmoTlqLHkuZDlnLrkuIrlvIDorr7lpJrkuKrkvJrlkZjotKbmiLfvvIzlubbov5vooYzlpZfliKnkuIvms6jvvJvmnKzlhazlj7jmnInmnYPlj5bmtojmgqjnmoTkvJrlkZjotKblj7flubblsIbmiYDmnInkuIvms6jokKXliKnlj5bmtojvvIE="}
	 ];

 commonObj.initData(docConfig); 