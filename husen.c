#include<stdio.h>
int main(){
	
	int T, N;
	int jeongyeon[51][51]={0};
	int jeongyeon2[51][51]={0};
	int jeongyeon3[51][51]={0};
	scanf("%d", &T);
	for(int t = 1; t<=T;t++){
		scanf("%d", &n);
		int jeongyeon2[51][51]={0},arr4[51][51]={0};
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				scanf("%d",  jeongyeon[i][j]);
			}
		}
		
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				scanf("%d", &jeongyeon2[i][j]);
			}
		}
		
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				scanf("%d", &jeongyeon3[i][j]);
			}
		}
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				for(int k=0; k<n;k++){
				 jeongyeon2[i][j]+ jeongyeon[i][k]*jeongyeon2[k][j];
				}
			}
		}
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				for(int k=0; k<n;k++){
					arr4[i][j]+ jeongyeon2[i][k]*jeongyeon3[k][j];
				}
			}
		}
		printf("Case #%d:\n", t);
		for(int i =0; i<n;i++){
			for(int j=0; j<n; j++){
				if(j<n-1){
				
				printf("%d ", arr4[i][j]);}
				else{
					printf("%d", arr4[i][j]);
				}
			}
			printf("\n");
		}	
	}
	return 0;
}