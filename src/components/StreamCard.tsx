'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface StreamCardProps {
    id: string;
    title: string;
    thumbnail: string;
}

const StreamCard: React.FC<StreamCardProps> = ({ id, title, thumbnail }) => {
    return (
        <Card
            sx={{
                maxWidth: '100%',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 5,
                },
            }}
        >
            <CardActionArea onClick={() => (window.location.href = `/stream/${id}`)}>
                {/* Thumbnail */}
                <CardMedia
                    component="img"
                    height="180"
                    image={thumbnail}
                    alt={title}
                    sx={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                    }}
                />
                {/* Title */}
                <CardContent>
                    <Typography variant="subtitle1" component="div" fontWeight="bold" noWrap>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default StreamCard;
