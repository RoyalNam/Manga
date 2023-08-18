'use client';
import Test from '@/components/Test';
import { getManga } from '@/services/manga';
import { Manga } from '@/types/manga';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
    return (
        <div>
            <Test />
        </div>
    );
}
