#include<stdio.h>

int ee(int n);

void main(){
	int t;
	printf("enter a number : \n");
	scanf("%d",&t);

	printf("%d \n",ee(t));

	printf("hello  \n");
}

int ee(int n){
	int T[1+(n/3)],i=1,j;
	T[0]=1;
	printf("0 ");
	for(j=1;j<=n;j++){
		T[j]=T[j-1]*3;
		printf("%d ",j);
	}
	printf("\n");
	for(j=0;j<n;j++){
		
		printf("%d ",T[j]);
	}
	
	 return 0;
}
