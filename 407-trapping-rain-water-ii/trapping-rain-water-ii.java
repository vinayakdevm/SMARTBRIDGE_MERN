 class Cell
{
  int height,row,col;
  Cell(int height,int row,int col)
  {
    this.height=height;
    this.row=row;
    this.col=col;
  }
}


class Solution {
     public boolean isCheck(int x,int y,int m,int n)
       {return x>=0 && y>=0 && x<m && y<n;}


    public int trapRainWater(int[][] heightMap) {

       PriorityQueue<Cell> pq=new PriorityQueue<>(new Comparator <> (){
        @Override
        public int compare(Cell a,Cell b)
        {return Integer.compare(a.height,b.height);}
       }) ;

       //length
       int m=heightMap.length;
       int n=heightMap[0].length;
      
      if(m<2 ||n<2 ) //water trapping starts  from 3x3
       {return 0;}

       boolean visited[][] =new boolean[m][n];//we dont go to visited element
       int i=0;
       int[][] dir={{-1,0},{0,-1},{1,0},{0,1}};//t l b r
       int volume=0;

      
      
      //insert boundaries
      for(i=0;i<n;i++)
      {
        pq.add(new Cell(heightMap[0][i],0,i));
        pq.add(new Cell(heightMap[m-1][i],m-1,i));
        visited[0][i]=visited[m-1][i]=true;
      }

      for(i=0;i<m;i++)
      {
        pq.add(new Cell(heightMap[i][0],i,0));
        pq.add(new Cell(heightMap[i][n-1],i,n-1));
        visited[i][0]=visited[i][n-1]=true;
      }

      while(!pq.isEmpty())
      {
        Cell e=pq.remove();
        for(i=0;i<4;i++)
        {
          int x=e.row+dir[i][0];
          int y=e.col+dir[i][1];

          if(isCheck(x,y,m,n)&&visited[x][y]==false)
          {
            if(e.height>heightMap[x][y])
            {
               volume +=e.height-heightMap[x][y];
               pq.add(new Cell(e.height,x,y));
          //think that water is filled and giving the height after water filled
            }
            else
            {
              pq.add(new Cell(heightMap[x][y],x,y));//water is not there
            }
           visited[x][y]=true;

          }
        }
      
      }
      return volume;



    }
}